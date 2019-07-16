import React, { Component } from 'react';
import './Product.css';

class newProduct extends Component {
    state={
       type: '',
       description: '',
       costPrice: '',
       multiplier: '',
       branch: '',
       amount: '',
       inputDate: new Date(),
    };

    handleSubmit = async e =>{
        e.preventDefault();

        const data = new FormData();
        data.append('type', this.state.type);
        data.append('costPrice', this.state.costPrice);
        data.append('branch', this.state.branch);
        data.append('amount', this.state.amount);
        data.append('description', this.state.description);
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        return(
            <form id="new-product" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="type"
                    placeholder="Nome do produto"
                    onChange={this.handleChange}
                    value={this.state.type}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Descrição do produto"
                    onChange={this.handleChange}
                    value={this.state.description}
                />
                <input
                    type="text"
                    name="costPrice"
                    placeholder="Preço de custo"
                    onChange={this.handleChange}
                    value={this.state.costPrice}
                />
                <input
                    type="text"
                    name="branch"
                    placeholder="Marca do produto"
                    onChange={this.handleChange}
                    value={this.state.branch}
                />
                <input
                    type="text"
                    name="amount"
                    placeholder="Quantidade"
                    onChange={this.handleChange}
                    value={this.state.amount}
                />
                <input
                    type="text"
                    name="multiplier"
                    placeholder="Multiplicador"
                    onChange={this.handleChange}
                    value={this.state.multiplier}
                />
                <button type="submit">Enviar</button>
            </form>    
        );
    }
}

export default newProduct;