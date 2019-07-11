import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MovePage from './Pages/MovePage.js';
import { BrowserRouter, Switch, Route  } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <App/>
        <Switch>
            <Route path="/move" component={MovePage} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
