import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './App.css';

import Home from './Home/Home';
import About from './About/About';
import Form from './Form/Form';
import All from './All/All';
import Submit from './Submit/Submit';

function App() {
  return (
    <div id='page-container'>
        <Switch>

            <Route path='/' exact component={Home}/>

            <Route path='/about' exact component={About} />

            <Route path='/form' exact component={Form} />

            <Route path='/all' exact component={All} />

            <Route path='/submit' exact component={Submit} />

            <Redirect to='/' />

        </Switch>

    </div>
  );
}

export default App;
