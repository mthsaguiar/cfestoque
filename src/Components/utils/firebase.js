import firebase from 'firebase/app';
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyAdKpbZCfL_YFFJzyvm7p3ZI-515Ecy2uU",
    authDomain: "confestoque-2dfca.firebaseapp.com",
    databaseURL: "https://confestoque-2dfca.firebaseio.com",
    projectId: "confestoque-2dfca",
    storageBucket: "",
    messagingSenderId: "273081594228",
    appId: "1:273081594228:web:253c29194e4a4335"
  };

firebase.initializeApp(config);

export default firebase;