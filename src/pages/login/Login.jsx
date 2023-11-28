import React from 'react'
import { useDispatch } from 'react-redux'
import { loginGoogle } from '../../store/users/userActions'


const Login = () => {
const dispatch = useDispatch()
  const handleLogin = ()=>{
     dispatch(loginGoogle())
  } 
  return (
    <div>
      <button onClick={()=> handleLogin()}>Entrar con google</button>
    </div>

  )
}

export default Login