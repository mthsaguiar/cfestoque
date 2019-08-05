import React, { Component } from 'react';
import { connect } from 'react-redux'
import TableComponent from '../../Components/Table/table'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
class Search extends Component {

  render(){

    //console.log(this.props)
    const { products, auth } = this.props;
    if(!auth.uid) return <Redirect to='/login'/>
    return(
      <div>
        <TableComponent data={products}>
        </TableComponent>
      </div>
    );
  }
  
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    products: state.firestore.ordered.products,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'products'}
  ])
)(Search)