import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux'

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({ user }) => {
            dispatch(
                login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                })
            );
        })
        .catch((error) => alert(error.message));
    };

  return (
    <div className='login'>
        <div className='login__container'>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" 
                alt="Gmail Logo"
            />
            <Button variant='contained' color="primary" onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login