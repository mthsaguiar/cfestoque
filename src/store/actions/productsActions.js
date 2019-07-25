export const createProduct = (product) =>{
    return(dispatch, getState)=>{
        //make async call to database
        dispatch({type: 'CREATE_PRODUCT', product});
    }
};