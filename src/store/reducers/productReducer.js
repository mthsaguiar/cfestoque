/* eslint-disable default-case */
const initState = {
    products:[
        {id: '1', name: 'title1', description: 'xxx', code: 'xxx', branch: 'xxx', amount: 'xxx', costPrice: 'xxx'},
        {id: '2', name: 'title2', description: 'xxxx', code: 'xxxx', branch: 'xxxx', amount: 'xxxx', costPrice: 'xxxx'},
        {id: '3', name: 'title3', description: 'xxxxx', code: 'xxxxx', branch: 'xxxxx', amount: 'xxxxx', costPrice: 'xxxxx'}
    ]
};

const productReducer = (state = initState, action) =>{
switch(action.type){
    case 'CREATE_PRODUCT':
        console.log('created product', action.product)
        return state;
    case 'CREATE_PRODUCT_ERROR':
        console.log('create product error', action.err)
        return state;
    default:
        return state;
}
}

export default productReducer;