import React, { Component } from 'react';
import { connect } from 'react-redux'
import TableComponent from '../../Components/Table/table'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
class Search extends Component {

  render(){

    //console.log(this.props)
    const { products } = this.props;
    
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
    products: state.firestore.ordered.products
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'products'}
  ])
)(Search)