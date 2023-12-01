import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginGoogle } from '../../store/users/userActions'
import { firestore } from '../../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";


const Login = () => {

  const dispatch = useDispatch()

  const handleLogin = ()=>{
    dispatch(loginGoogle())
  }
  
  const { register, handleSubmit } = useForm();

  const handleLoginWithEmailAndPassword = (data) => {
    console.table(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleLoginWithEmailAndPassword)}>
        <input type="email" placeholder="ingrese su correo " { ...register("email") }/>
        <input type="password" placeholder="ingrese su contraseña" { ...register("password") }/>
        <button type="submit">Inicia Sesión</button>
      </form>
      <button type='button' onClick={()=> handleLogin()}>Entrar con google</button>
    </div>
  )
}

export default Login