import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/root.reducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from './config/firebase'

const store = createStore(rootReducer, 
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase)
    )
);

ReactDOM.render(<Provider store={store}><App/>,</Provider>, document.getElementById('root'));
