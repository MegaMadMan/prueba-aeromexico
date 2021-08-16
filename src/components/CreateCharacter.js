import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class CreateCharacter extends Component {

    state = {
        editing: false,
        characterType: ''
    }

    async componentDidMount() {
        if (this.props.match.params.id) {
            console.log(this.props.match.params.id)
            const res = await axios.get('http://localhost:3001/characters/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                name: res.data.name,
                dateOfBirth: res.data.dateOfBirth,
                eyeColour: res.data.eyeColour,
                hairColour: res.data.hairColour,
                image: res.data.image,
                gender: res.data.gender,
                hogwartsStudent: res.data.hogwartsStudent,
                hogwartsStaff: res.data.hogwartsStaff,
                id: res.data.id,
                editing: true
            });
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedCharacter = {
                name: this.state.name,
                dateOfBirth: this.state.dateOfBirth,
                eyeColour: this.state.eyeColour,
                hairColour: this.state.hairColour,
                gender: this.state.gender,
                hogwartsStudent: this.state.characterType === 'hogwartsStudent'?true:false,
                hogwartsStaff: this.state.characterType === 'hogwartsStaff'?true:false,
                image: this.state.image,
                alive: true
            };
            await axios.put('http://localhost:3001/characters/' + this.state.id, updatedCharacter);
        } else {
            const newCharacter = {
                name: this.state.name,
                dateOfBirth: this.state.dateOfBirth,
                eyeColour: this.state.eyeColour,
                hairColour: this.state.hairColour,
                gender: this.state.gender,
                hogwartsStudent: this.state.characterType === 'hogwartsStudent'?true:false,
                hogwartsStaff: this.state.characterType === 'hogwartsStaff'?true:false,
                image: this.state.image,
                alive: true
            };
            axios.post('http://localhost:3001/characters/', newCharacter);
        }
        window.location.href = '/';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Agrega un personaje</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" name="name" onChange={this.onInputChange} value={this.state.name} required/>
                            </div>
                            <div className="col">
                                <label className="form-label">Cumpleaños</label>
                                <input type="text" className="form-control" name="dateOfBirth" onChange={this.onInputChange} value={this.state.dateOfBirth} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="form-label">Color de ojos</label>
                                <input type="text" className="form-control" name="eyeColour" onChange={this.onInputChange} value={this.state.eyeColour} required/>
                            </div>
                            <div className="col">
                                <label className="form-label">Color de pelo</label>
                                <input type="text" className="form-control" name="hairColour" onChange={this.onInputChange} value={this.state.hairColour} required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <label htmlFor="exampleInputEmail1" className="form-label">GÉNERO</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender"
                                           onChange={this.onInputChange} checked={this.state.gender === "female"} value="female" required/>
                                        <label className="form-check-label">Mujer</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender"
                                           onChange={this.onInputChange} checked={this.state.gender === "male"} value="male" required/>
                                        <label className="form-check-label">Hombre</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <label htmlFor="exampleInputEmail1" className="form-label">POSOCIÓN</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="characterType"
                                           onChange={this.onInputChange} checked={this.state.hogwartsStudent === true} value="hogwartsStudent" required/>
                                        <label className="form-check-label">Estudiante</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="characterType"
                                           onChange={this.onInputChange} checked={this.state.hogwartsStaff === true} value="hogwartsStaff" required/>
                                        <label className="form-check-label">Staff</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label className="form-label">Imagen URL</label>
                                <input type="url" className="form-control" name="image" onChange={this.onInputChange} value={this.state.image} required/>
                            </div>
                        </div>
                        <button className="btn btn-secondary">GUARDAR</button>
                    </form>
                </div>
            </div>
        )
    }
}
