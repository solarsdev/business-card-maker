import firebase from 'firebase';

export const providerName = Object.freeze({
  google: 'Google',
  github: 'GitHub',
});

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
