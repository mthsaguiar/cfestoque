import React, {Component, Fragment} from 'react'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import MovePage from './Pages/MovePage'

export default class extends Component {
render (){
return <Fragment>
<Header/>

<NavBar/>

<MovePage/>

</Fragment>
}
}