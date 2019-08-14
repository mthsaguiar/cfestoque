export const createProduct = (product) =>{
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        //make async call to database
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