import React, { Component } from 'react';
import './Product.css';
import { createProduct } from '../../store/actions/productsActions'
import { connect}  from 'react-redux'
import { Redirect } from 'react-router-dom'
class NewProduct extends Component{
    constructor(props) {
        super(props)
    this.state = {
            type: '',
            costPrice: '',
            branch: '',
            amount: '',
            description: '',
            multiplier: '',
            code: '',
}
this.handleSubmit = this.handleSubmit.bind(this)
}

    handleSubmit (e) {
        e.preventDefault();
        this.props.createProduct(this.state);
        this.props.history.push('/');
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.name ==='amount' ? parseInt(e.target.value) : e.target.value
        })
      };
        render(){
            const { auth } = this.props;
            if(!auth.uid) return <Redirect to='/login'/>
            
        return(
            <form id="new-product" onSubmit={this.handleSubmit}>
                <input
                    id="name"
                    type="text"
                    name="type"
                    placeholder="Nome"
                    value={this.state.type}
                    onChange={this.handleChange}
                />
                <input
                    id="code"
                    type="text"
                    name="code"
                    placeholder="Código"
                    onChange={this.handleChange}
                    value={this.state.code}
                />
                <input
                    id="decript"
                    type="text"
                    name="description"
                    placeholder="Descrição"
                    onChange={this.handleChange}
                    value={this.state.description}
                />
                 <input
                    id="branches"
                    type="text"
                    name="branch"
                    placeholder="Marca"
                    onChange={this.handleChange}
                    value={this.state.branch}
                />
                <input
                    id="howmany"
                    type="text"
                    name="amount"
                    placeholder="Quantidade"
                    onChange={this.handleChange}
                    value={this.state.amount}
                />
                <input
                    id="cost"
                    type="text"
                    name="costPrice"
                    placeholder="Custo"
                    onChange={this.handleChange}
                    value={this.state.costPrice}
                />
                <input
                    id="mult"
                    type="text"
                    name="multiplier"
                    placeholder="Multiplicador"
                    onChange={this.handleChange}
                    value={this.state.multiplier}
                />
                <button type="submit">Enviar</button>
            </form>    
        );}
}

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createProduct:(product)=>dispatch(createProduct(product))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);