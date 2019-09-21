/* eslint-disable default-case */
const initState = {
    products:[ ]
};

const productReducer = (state = initState, action) =>{
switch(action.type){
    case 'CREATE_PRODUCT':
        console.log('created product', action.product)
        return state;
    case 'CREATE_PRODUCT_ERROR':
        console.log('create product error', action.err)
        return state;
    case 'UPDATE_PRODUCT':
        console.log('updated product', action.product)
        return state;
    case 'UPDATE_PRODUCT_ERROR':
        console.log('updated product', action.err)
        return state
    default:
        return state;
}
}

export default productReducer;