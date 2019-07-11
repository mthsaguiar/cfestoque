import { Switch, Route } from 'react-router-dom';
import React from 'react';
import addProduct from './Pages/AddProduct';
import InputOutputNew from './Pages/InputOutput';

function Routes(){
    return (
        <Switch>
        <Route path="/" exact component={addProduct}/>
        <Route path="/move" component={InputOutputNew}/>
        </Switch>
    );
}
export default Routes;