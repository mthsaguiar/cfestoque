import React, {Component, Fragment} from 'react'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import Divider from '@material-ui/core/Divider'
export default class extends Component {
render (){
return <Fragment>
<Header/>
<Divider/>
<NavBar/>

</Fragment>
}
}