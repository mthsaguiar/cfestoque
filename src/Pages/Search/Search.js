import React, { Component } from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { removeProduct } from '../../store/actions/productsActions'
import './Search.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
class Search extends Component {
  constructor(props){
    super(props)
    this.state={
      cod:''
    }
  }

  async handleClick(productId){
    await this.setState({
      cod: productId
    })
    this.props.removeProduct(this.state);
  }
    
render(){

  const { products, auth} = this.props;
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
      width: 220,
      maxWidth: 220,
      minWidth: 220,
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
    },
    {
      Header:"Remover",
      style:{
        textAlign: "center"
      },
      Cell: props =>{
        return(
          <button style={{backgroundColor: "#21CBF3", color: "#fff", fontSize: 12, padding: 2, border: "none"}}
          onClick={()=>{
            this.handleClick(props.original.id)
          }}
          >Remover</button>
        );
      },
      sortable: false,
      filterable: false,
      width: 80,
      maxWidth: 80,
      minWidth: 80,
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
      showPageSizeOptions={false}
      />
    </div>
    );
  }
  
}
const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    removeProduct:(product)=>dispatch(removeProduct(product))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection: 'products'}
  ])
)(Search)