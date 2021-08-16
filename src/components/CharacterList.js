import React, { Component } from 'react'
import axios from 'axios'
import {addFavorite} from "../state/action-creators";


export default class CharacterList extends Component {

    state = {
        characters: []
    }

    async componentDidMount() {
        this.getCharacters();
    }

    getCharacters = async () => {
        const res = await axios.get('http://localhost:3001/characters')
        this.setState({
            characters: res.data
        });
    }
    getStudents = async () => {
        const res = await axios.get('http://localhost:3001/characters?hogwartsStudent=true')
        this.setState({
            characters: res.data
        })
    }
    getStaffs = async () => {
        const res = await axios.get('http://localhost:3001/characters?hogwartsStaff=true')
        this.setState({
            characters: res.data
        });
    }

    cardColor(character) {
        switch(character.house) {
            case 'Gryffindor':
                return <div className="col-md-4 half-redondeado Gryffindor"><img src={character.image} className="img-fluid char-foto"/></div>;
            case 'Slytherin':
                return <div className="col-md-4 half-redondeado Slytherin"><img src={character.image} className="img-fluid char-foto"/></div>;
            case 'Ravenclaw':
                return <div className="col-md-4 half-redondeado Ravenclaw"><img src={character.image} className="img-fluid char-foto"/></div>;
            case 'Hufflepuff':
                return <div className="col-md-4 half-redondeado Hufflepuff"><img src={character.image} className="img-fluid char-foto"/></div>;
            default:
                return <div className="col-md-4 half-redondeado"><img src={character.image} className="img-fluid char-foto"/></div>;
        }
    }

    render() {
        return (
            <div>
                <div className="container p-5">
                    <img src="https://logos-marcas.com/wp-content/uploads/2020/04/Harry-Potter-Logo.png" className="img-fluid image-logo"/>
                    <div className="transparent-buttons">
                        <h1 className="pb-5 text-white">Selecciona tu filtro</h1>
                        <button onClick={this.getStudents} className="transparent-btn m-3 p-4">ESTUDIANTES</button>
                        <button onClick={this.getStaffs} className="transparent-btn m-3 p-4">STAFF</button>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            this.state.characters.map(character => (
                                <div className="col-md-6 p-2" key={character.id}>
                                    <div className={`card redondeado ${!character.alive && "finado"}`}>
                                        <div className="row g-0">
                                            {this.cardColor(character)}
                                            <div className="col-md-8">
                                                <div className=" d-flex justify-content-between">
                                                    <p className="ps-3 pt-2">{character.alive?"VIVO":"FINADO"}{character.hogwartsStudent&&" / ESTUDIANTE"}{character.hogwartsStaff&&" / STAFF"}</p>
                                                    {/*<Link to={"/edit/" + character.id} className="text-decoration-none">
                                                        <i className="material-icons">
                                                            bookmark_border</i>
                                                    </Link>*/}
                                                    <button className="transp" onClick={() => addFavorite(character.id)}><i className="material-icons">
                                                        bookmark_border</i></button>
                                                </div>
                                                <div className="card-body">
                                                    <h5>
                                                        {character.name}
                                                    </h5>
                                                    <p>
                                                        <b>Cumpleaños:</b> {character.dateOfBirth}
                                                    </p>
                                                    <p>
                                                        <b>Genero:</b> {character.gender.charAt(0).toUpperCase()+character.gender.slice(1)}
                                                    </p>
                                                    <p>
                                                        <b>Color de ojos:</b> {character.eyeColour.charAt(0).toUpperCase()+character.eyeColour.slice(1)}
                                                    </p>
                                                    <p>
                                                        <b>Color de pelo:</b> {character.hairColour.charAt(0).toUpperCase()+character.hairColour.slice(1)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
