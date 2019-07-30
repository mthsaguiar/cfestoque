import React, {Component, Fragment} from 'react'
import Home from './Pages/Home/home'
import NewProduct from './Pages/ProductInput/Product'
import Search from './Pages/Search/Search'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import SignIn from './auth/signIn'
import signUp from './auth/signUp'
import { connect } from 'react-redux'

class App extends Component {
    state = {
        data: []
    };

render (){
    const { auth } = this.props;
    const Links = auth.uid ? <Home/> : <SignIn/>
return(
<BrowserRouter>
    <Fragment>
        {Links}
                <Switch>
                    <Route path="/search" component={Search}            
                    />
                    <Route exact path="/newproduct" component={NewProduct}           
                    />
                    <Route exact path="/register" component={signUp}           
                    />
                </Switch>
    </Fragment>
</ BrowserRouter>);
}
}

const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(App)
