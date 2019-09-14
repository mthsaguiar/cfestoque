import React, { Component } from 'react';
import { connect } from 'react-redux'
import TableComponent from '../../Components/Table/table'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import './Search.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
class Search extends Component {

  state={
    cod:''
  }
render(){

  const { products, auth } = this.props;
  const columns = [
    {
      Header: "Código",
      accessor: "code",
      style:{
        fontSize: 12,
      },
      width: 120,
      maxWidth: 120,
      minWidth: 120,
    },  
    {
      Header:"Descrição",
      accessor: "description",
      style:{
        fontSize: 12,
      },
      width: 330,
      maxWidth: 330,
      minWidth: 330,
    },
    {
      Header: "Marca",
      accessor: "branch",
      style:{
        fontSize: 12,
      },
      width: 150,
      maxWidth: 150,
      minWidth: 150,
    },
    {
      Header: "Quantidade",
      accessor: "amount",
      style:{
        fontSize: 14,
      },
      width: 100,
      maxWidth: 100,
      minWidth: 100,
    },
    {
      Header: "Custo",
      accessor: "costPrice",
      style:{
        fontSize: 12,
      },
      width: 100,
      maxWidth: 100,
      minWidth: 100,
    }
  ]
  if(!auth.uid) return <Redirect to='/login'/>
  return(
    <div className="s-container">
      <ReactTable
      columns={columns}
      data={products}
      filterable
      defaultPageSize={10}
      />
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