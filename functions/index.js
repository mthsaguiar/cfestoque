const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
exports.helloWorld = functions.https.onRequest((request,response)=>{
    response.send("Hello World");
})

const createNotification = (notification=>{
    return admin.firestore().collection('notification')
    .add(notification)
    .then(doc=>console.log('notification added', doc))
}) 

exports.productCreated = functions.firestore
.document('products/{productId}')
.onCreate(doc =>{

    const product = doc.data();
    const notification = {
        content: 'Adicionado um novo produto',
        user: `${product.author}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
})  