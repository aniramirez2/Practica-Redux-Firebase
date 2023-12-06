import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginGoogle, loginWithEmailAndPassword } from '../../store/users/userThunks'
import { useForm } from 'react-hook-form'
import { FaGooglePlusG, FaPhone  } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import { useEffect } from 'react'


const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticate, user, error } = useSelector(( store ) => store.user)
  const { register, handleSubmit } = useForm()

  const handleLogin = ()=>{
    dispatch(loginGoogle())
  }
  

  const handleLoginWithEmailAndPassword = (data) => {
    console.table(data);
    dispatch(loginWithEmailAndPassword(data))
  }

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Oops!",
        text: "Ha ocurrido un error, por favor verifique sus credenciales",
        icon: "Error"
      })
    }
  
    if ( error === false ) {
      Swal.fire({
        title: `Bienvenido ${user.name}!`,
        text: "Has iniciado sesión exitosamente",
        icon: "success"
      }).then(navigate('/home'))
    }
  }, [error])



  return (<>
    <section className='w-full px-5'>
    <h1 className='text-3xl font-bold underline my-3'>Iniciar sesión</h1>
    <form
      className='grid justify-start' 
      onSubmit={handleSubmit(handleLoginWithEmailAndPassword)}
    >
      <input 
          className='border border-indigo-300 rounded-md my-3 h-10 text-indigo-700 px-5' 
          type='email' 
          placeholder='Ingrese su correo electrónico'
          name='email'
          { ...register('email') } 
        />
        <input 
          className='border border-indigo-300 rounded-md my-3 h-10 text-indigo-700 px-5' 
          type='password' 
          placeholder='Ingrese su contraseña' 
          name='password'
          { ...register('password') }
        />
        <div className='flex gap-4'>
          <button className='bg-violet-400 text-white h-10 rounded-md my-5 px-5' type='submit'>Iniciar sesión</button>
          <button
            className='bg-green-400 text-white h-10 rounded-md my-5 p-5 flex place-items-center flex gap-2'
            type='button'
            onClick={() => handleLogin()}
          >
            Ingresar con google
            <FaGooglePlusG />
          </button>
          <button
            className='bg-green-400 text-white h-10 rounded-md my-5 p-5 flex place-items-center flex gap-2'
            type='button'
            onClick={() => navigate('/login-phone')}
          >
            Ingresar con celular
            <FaPhone />
          </button>
        </div>
        <p>
        Si no tiene una cuenta registrada, registrese
        <Link 
          className='text-indigo-900 underline px-1' 
          to='/register'
        >
          aquí
        </Link>
      </p>
    </form>
  </section>
  </>)
}

export default Login