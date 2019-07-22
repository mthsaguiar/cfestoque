import React, { useState } from 'react';
import './Product.css';
import firebase from '../Components/utils/firebase'

const NewProduct = () => {

    const [form, setValues] = useState({
            type: '',
            costPrice: '',
            branch: '',
            amount: '',
            description: '',
            multiplier: '',
            code: '',
            date: Date()
      });

    function handleSubmit (e) {
        e.preventDefault();

        firebase
        .firestore()
        .collection('products')
        .add({
            form
        })
        .then(() =>{
            setValues('')
        })
    }
    const updateField = e => {
        setValues({
          ...form,
          [e.target.name]: e.target.value
        });
      };
    
        return(
            <form id="new-product" onSubmit={handleSubmit}>
                <input
                    id="name"
                    type="text"
                    name="type"
                    placeholder="Nome"
                    value={form.type}
                    onChange={updateField}
                />
                <input
                    id="code"
                    type="text"
                    name="code"
                    placeholder="Código"
                    onChange={updateField}
                    value={form.code}
                />
                <input
                    id="decript"
                    type="text"
                    name="description"
                    placeholder="Descrição"
                    onChange={updateField}
                    value={form.description}
                />
                 <input
                    id="branches"
                    type="text"
                    name="branch"
                    placeholder="Marca"
                    onChange={updateField}
                    value={form.branch}
                />
                <input
                    id="howmany"
                    type="text"
                    name="amount"
                    placeholder="Quantidade"
                    onChange={updateField}
                    value={form.amount}
                />
                <input
                    id="cost"
                    type="text"
                    name="costPrice"
                    placeholder="Custo"
                    onChange={updateField}
                    value={form.NewProductcostPrice}
                />
                <input
                    id="mult"
                    type="text"
                    name="multiplier"
                    placeholder="Multiplicador"
                    onChange={updateField}
                    value={form.multiplier}
                />
                <button type="submit">Enviar</button>
            </form>    
        );
}

export default NewProduct