import React, { Component } from 'react';
import { connect } from 'react-redux'
import TableComponent from '../Components/Table/table'
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
  return {
    products: state.project.products
  }
}

export default connect(mapStateToProps)(Search)