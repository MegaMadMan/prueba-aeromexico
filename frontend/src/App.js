import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import CharacterList from './components/CharacterList'
import CreateCharacter from './components/CreateCharacter'
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators} from "redux";
import { actionCreators } from "./state/index"
import {store} from "./state/store";

function App() {

    const favorites = useSelector((state) => state);
    const dispatch = useDispatch()
    const { addFavorite, removeFavorite } = bindActionCreators(actionCreators, dispatch)
    console.log(store.getState())
    store.subscribe(() =>{
        console.log(favorites)
        console.log(Object.keys(favorites).length)
    })

  return (
    <Router>
      <Navigation />
        <Route path="/" exact component={CharacterList} />
        <Route path="/edit/:id" component={CreateCharacter} />
        <Route path="/create" component={CreateCharacter} />
    </Router>
  );
}

export default App;
