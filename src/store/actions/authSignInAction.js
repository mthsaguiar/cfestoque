const signIn = (credentialsemail,credentialspass) =>{
    return(dispatch, getState, { getFirebase })=>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentialsemail.email,
            credentialspass.password
        ).then(()=>{
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err)=>{
            dispatch({ type: 'LOGIN_ERROR', err });
        });

    }
}

export default signIn