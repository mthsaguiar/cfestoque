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
       code: '',
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
        data.append('multiplier', this.state.multiplier);
        data.append('code', this.state.code);

    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        return(
            <form id="new-product" onSubmit={this.handleSubmit}>
                <input
                    id="name"
                    type="text"
                    name="type"
                    placeholder="Nome"
                    onChange={this.handleChange}
                    value={this.state.type}
                />
                <input
                    id="code"
                    type="text"
                    name="code"
                    placeholder="Código"
                    onChange={this.handleChange}
                    value={this.state.description}
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
        );
    }
}

export default newProduct;