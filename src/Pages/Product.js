import React, { Component } from 'react';
import './Product.css';
import FirebaseService from '../Components/services/firebaseServices'
class newProduct extends Component {
    constructor(props){
        super(props);
    this.state={
        id: null,
       type: '',
       description: '',
       costPrice: '',
       multiplier: '',
       branch: '',
       amount: '',
       code: '',
       inputDate: new Date(),
    }
}
    componentWillMount = () => {
        const {id} = this.props.match.params;

        if (!(id === undefined || !id)) {
            this.setState({id});
            FirebaseService.getUniqueDataBy('leituras', id, (data) => this.setState({...data}, () => console.log(this.state)));
        }

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

        if (this.props.match.params.id === undefined) {
            FirebaseService.pushData('leituras', data);
        } else {
            FirebaseService.updateData(this.props.match.params.id, 'leituras', data)
        }

        await FirebaseService.pushData('leituras', data);
        this.props.history.push('');

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
        );
    }
}

export default newProduct;