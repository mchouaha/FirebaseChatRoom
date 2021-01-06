import React from 'react';
import './login.css'

import firebase from 'firebase/app'
import firebaseApp from '../../firebase/firebaseConfig'
import { login } from '../../firebase/firebase';


const Login = () =>  {

    return (
        <button className="sign-out" onClick={() => login()}>Login with Google</button>
    );

  }
  export default Login;