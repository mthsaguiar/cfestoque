import React, {Component} from 'react'
import './MovePage.css';
import Movebuttons from '../Components/MoveButtons/movebuttons'

export default class MovePage extends Component {
    render() {
      return( 
        <section id="move-page">
            <div className="move-buttons">
              <Movebuttons>
              </Movebuttons>
            </div>
        </section>);
    }
  }