export const createProduct = (product) =>{
    return(dispatch, getState, {getFirebase, getFirestore})=>{

        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('products').add({
            ...product,
            author: `${profile.firstName} ${profile.lastName}`,
            authorId: authorId,
            createDate: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_PRODUCT', product});
        }).catch((err)=>{
            dispatch({type: 'CREATE_PRODUCT_ERROR', err});
        })
    }
};

export const updateProduct = (product) =>{
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        firestore.collection('products').where('code','==', product.code).get()
        .then(snapshot =>{
            snapshot.forEach( doc =>{
            if(product.option==='Entrada'){
                var aux;
                console.log(doc.data().amount)
                aux = doc.data().amount+product.amount;
                console.log(aux)
            }else{
                aux=doc.data().amount-product.amount;
            }
            firestore.collection('products').doc(doc.id).update(
                {
                    amount: aux
                }
            ).then(()=>{
                dispatch({type: 'UPDATE_PRODUCT', product});
            }).catch((err)=>{
                dispatch({type: 'UPDATE_PRODUCT_ERROR', err})
            });});
        }).catch((err)=>{
            dispatch({type: 'UPDATE_PRODUCT_ERROR', err})
        });

    }
};

export const removeProduct = (product) =>{
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        console.log(product.cod)
       const firestore = getFirestore();
       firestore.collection('products').doc(product.cod).delete()
        .then(()=>{
           dispatch({type: 'REMOVE_PRODUCT', product})
        })
        .catch((err)=>{
            dispatch({type: 'REMOVE_PRODUCT_ERROR', err})
        })
    }
}