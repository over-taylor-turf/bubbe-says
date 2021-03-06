import React from 'react';
import { Route, Redirect, Switch, Link } from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Search from './Search/Search';
import All from './All/All';
// import Word from './All/Word';
import Submit from './Submit/Submit';
import Game from './Game/Game';
import { yiddishword } from './WordData/Data';


function App() {


  return (
    <div id='page-container'>
        <Switch>

            <Route path='/' exact component={Home}/>

            <Route path='/about' exact component={About} />

            <Route path='/search' exact component={Search} />

            <Route path='/all' exact component={All} />

            {/* <Route path='/word/:id' exact component ={Word}/> */}

            <Route path='/submit' exact component={Submit} />

            <Route path='/game' exact component={Game} />

            <Redirect to='/' />

        </Switch>

    </div>
  );
}

export default App;
