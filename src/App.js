import React, {Component, Fragment} from 'react'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import MovePage from './Pages/MovePage';
import newProduct from './Pages/Product'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'

export default class extends Component {
render (){
return(
<BrowserRouter>
    <Fragment>
        <Header/>
            <NavBar/>
                <Switch>
                    <Route path="/move" component={MovePage} />
                    <Route path="/newproduct" component={newProduct} />
                </Switch>
    </Fragment>
</ BrowserRouter>);
}
}