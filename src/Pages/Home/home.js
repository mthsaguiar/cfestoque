import React, { Component } from 'react'
import HeaderBar from '../../Components/Header/Header'
import NavBar from '../../Components/NavBar/NavBar'

export default class Home extends Component{

    render(){
        return(
        <div>
            <NavBar/>
            <HeaderBar/>
        </div>
        );
    }

}