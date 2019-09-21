import React, { Component } from 'react';
import { connect}  from 'react-redux'
import { updateProduct } from '../../store/actions/productsActions'
import './Move.css'

class Move extends Component {
  constructor(props){
    super(props);
    this.state={
      amount: '',
      code: '',
      option: 'Entrada'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = e =>{
    e.preventDefault();
    this.props.updateProduct(this.state);
  }

  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.name === 'amount' ? parseInt(e.target.value) : e.target.value
    });
  }

  render() {
    return (
        <div className="m-container">

          <form onSubmit={this.handleSubmit}>

            <input
            type="text"
            name="code"
            placeholder="Digite o código do produto"
            value={this.state.code}
            onChange={this.handleChange}
            />

            <input
            type="text"
            name="amount"
            placeholder="Digite a quantidade movimentada"
            value={this.state.amount}
            onChange={this.handleChange}
            />

            <select name="option" value={this.state.option} onChange={this.handleChange}>
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>

            <input
            value="Confirmar"
            type="submit"
            />
          </form>
            
        </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
      updateProduct:(product)=>dispatch(updateProduct(product))
  }
}
export default connect(null, mapDispatchToProps)(Move);
