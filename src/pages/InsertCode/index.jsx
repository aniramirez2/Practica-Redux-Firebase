import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { loginWithCodeAsync } from "../../store/users/userThunks"

const InsertCode = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const login = (data) => {
    console.log(data)
    dispatch(loginWithCodeAsync(data.code))
  }

  return (
    <main>
      <h1 className='text-3xl font-bold underline my-3'>Insertar su codigo de verificacion</h1>
      <form
        className='grid justify-start'  
        onSubmit={handleSubmit(login)}
      >
        <input  
          className='border border-indigo-300 rounded-md my-3 h-10 text-indigo-700 px-5' 
          type='number' 
          placeholder='ingrese su codigo de verificacion' 
          { ...register('code') }
        />
        <button
            className='bg-green-400 text-white h-10 rounded-md my-5 p-5 flex place-items-center flex gap-2'
        >Confirmar codigo</button>
      </form>
      <div id='recaptcha-container'></div>
    </main>
  )
}

export default InsertCode
