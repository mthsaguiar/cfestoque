import React, { Component } from 'react'
import moment from 'moment'
import './notifications.css'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';


class Notify extends Component{
   render(){
   const {notification} = this.props;

        return(
        <div>
                <div className="notfications-container">
                    <ul>
                           { notification && notification.map(item=>{
                              return(
                           <li key={item.id}>
                                 <footer>
                                    <strong>{item.user}</strong>
                                    <p>{item.content}</p>
                                    <div>
                                       {moment(item.time.toDate()).fromNow()}
                                    </div>
                                 </footer>
                           </li>   
                              )
                           })}
                            
                    </ul>

                </div>    

        </div>
        );
    }}

   const mapStateToProps = (state) =>{
      return {
          notification: state.firestore.ordered.notification
      }
  }
  
   export default compose(
      connect(mapStateToProps),
      firestoreConnect([
          { collection:'notification', limit: 6, orderBy:['time','desc'] }
      ])
  )(Notify)