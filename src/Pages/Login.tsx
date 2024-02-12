import React from 'react'
import '../Css/Login.css'
import { loginUrl } from './spotify'

const Login = () => {
  return (
    <div className='login'>
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Image Not Loaded" />
        <a href={loginUrl}>Login With Spotify</a>
    </div>
  )
}

export default Login