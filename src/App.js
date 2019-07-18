import React, {Component, Fragment} from 'react'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import MovePage from './Pages/MovePage'
import newProduct from './Pages/Product'
import Search from './Pages/Search'
import FirebaseService from './Components/services/firebaseServices'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'

export default class extends Component {
    state = {
        data: []
    };
    
    componentDidMount() {
        FirebaseService.getDataList('leituras', (dataReceived) =>    this.setState({data: dataReceived}))
    }
    
render (){
return(
<BrowserRouter>
    <Fragment>
        <Header/>
            <NavBar/>
                <Switch>
                    <Route path="/move" component={MovePage} />
                    <Route path="/search" 
                    render={(props) => 
                        <Search {...props} data={this.state.data}/>}            
                    />
                    <Route exact path="/newproduct" component={newProduct}           
                    />
                </Switch>
    </Fragment>
</ BrowserRouter>);
}
}