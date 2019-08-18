import React, {Component, Fragment} from 'react'
import Home from './Pages/Home/home'
import NewProduct from './Pages/ProductInput/Product'
import Search from './Pages/Search/Search'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import SignIn from './auth/signIn'
import signUp from './auth/signUp'
import Notify from './Pages/Notifications/notfications'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class App extends Component {

render (){
    const { auth } = this.props;
    const Links = auth.uid ? <Home/> : <Redirect to='/login'/>
return(
<BrowserRouter>
    <Fragment>
        {Links}
                <Switch>
                    <Route exact path="/" component={Notify}            
                    />
                    <Route exact path="/login" component={SignIn}            
                    />
                    <Route exact path="/search" component={Search}            
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
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(App)
