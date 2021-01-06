import React from 'react'
import './App.css'

import firebaseApp from './firebase/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'

import Login from './components/login/login'
import ChatRoom from './components/chatRoom/chatRoom'

import { logout } from './firebase/firebase'

function App() {

  const auth = firebaseApp.auth()
  const [user] = useAuthState(auth)

  return (
    <div className="app">
       {user ? <ChatRoom/> : <Login/>}

       {user && <button className="sign-out" onClick={() => logout()}>Sign Out</button>}
  
    </div>
  );
}

export default App
