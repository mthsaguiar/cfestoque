import React, {Component,Fragment} from 'react'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Divider from '@material-ui/core/Divider'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

export default class extends Component {
render (){
return <BrowserRouter>
<Fragment>
<Header />
<Divider />
<NavBar />
<Routes />
</Fragment>
</BrowserRouter>
}
}
