import React, {Component, Fragment} from 'react'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import MovePage from './Pages/MovePage'
import NewProduct from './Pages/Product'
import Search from './Pages/Search'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import SignIn from './auth/signIn'
import signUp from './auth/signUp'

export default class extends Component {
    state = {
        data: []
    };
    
render (){
return(
<BrowserRouter>
    <Fragment>
        <Header/>
            <NavBar/>
                <Switch>
                    <Route path="/move" component={MovePage} 
                    />
                    <Route path="/search" 
                    render={(props) => 
                        <Search {...props} data={this.state.data}/>}            
                    />
                    <Route exact path="/newproduct" component={NewProduct}           
                    />
                    <Route exact path="/login" component={SignIn}           
                    />
                    <Route exact path="/register" component={signUp}           
                    />
                </Switch>
    </Fragment>
</ BrowserRouter>);
}
}