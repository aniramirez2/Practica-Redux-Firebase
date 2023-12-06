import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { saveImage } from '../../helpers/uploadFile'
import { createAnAccountAsync } from '../../store/users/userThunks'

const Register = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const handleRegister = async ( accountData ) => {
    const file = accountData.photoUrl[0]
    const imageUrl = await saveImage(file)

    const userData = {
      name: accountData.displayName,
      email: accountData.email,
      password: accountData.password,
      confirmPassword: accountData.confirmPassword,
      photoUrl: imageUrl
    }
    console.log(userData)
    dispatch(createAnAccountAsync(userData))
  }

  return (
    <main className='w-full px-5'>
      <h1 className='text-3xl font-bold underline my-3'>Crear una nueva cuenta</h1>
      <form 
        className='grid justify-start'
        onSubmit={handleSubmit(handleRegister)}
      >
        <input 
          className='border border-indigo-300 rounded-md my-3 h-10 text-indigo-700 px-5' 
          type='text' 
          placeholder='Ingrese su nombre completo' 
          name='displayName'
          { ...register('displayName') }
        />
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
        <input 
          className='border border-indigo-300 rounded-md my-3 h-10 text-indigo-700 px-5' 
          type='password' 
          placeholder='Confirme su contraseña' 
          name='confirmPassword'
          { ...register('confirmPassword') }
        />
        <input 
          className='my-3'
          type='file' 
          name='photoUrl'
          { ...register('photoUrl') }
        />
        <button className='bg-violet-400 text-white h-10 rounded-md my-5' type='submit'>Crear cuenta</button>
      </form>
      <p>
        Si ya tiene una cuenta registrada, inicie sesión
        <Link 
          className='text-indigo-900 underline px-1' 
          to='/login'
        >
          aquí
        </Link>
      </p>
    </main>
  )
}

export default Register
