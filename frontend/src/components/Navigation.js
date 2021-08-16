import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div className="btn-group">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button"
                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{background: '#6B63B5'}}>
                        FAVORITOS <i className="material-icons">
                        bookmark</i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <Link to="/create" className="btn btn-primary" style={{background: '#6B63B5'}}>AGREGAR <i className="material-icons">
                    person_add_alt_1</i></Link>
            </div>
        )
    }
}
