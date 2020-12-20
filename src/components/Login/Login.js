import React, { useContext } from 'react';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import google from '../../images/google.png';

import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { UserContext } from '../../App';

const Login = () => {

      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      const history = useHistory();
      const location = useLocation();
  
      const { from } = location.state || { from: { pathname: "/" } };
  
      if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
  
      const handleGoogleSignIn = () => {
          const provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function (result) {
  
              const { displayName, email } = result.user;
              const signedInUser = { name: displayName, email }
              setLoggedInUser(signedInUser);
              history.replace(from);
  
          }).catch(function (error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              var email = error.email;
              var credential = error.credential;
          });
      }
  
      return (
            <div>

            <div className="submit text-center">

                <h1>Login with</h1>
                <br />
                <button onClick={handleGoogleSignIn} className="google-button ">
                    <img src={google} className="google-icon float-left" alt=""/> Continue with Google</button>
                <br />
                <br />
                <p>Don't have an account? <a href="/">Create an account</a></p>
            </div>

        </div>
      );
};

export default Login;