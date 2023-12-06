import { useForm } from 'react-hook-form'
import { auth } from '../../firebase/firebaseConfig'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function LoginWithPhone() {
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()
  
  const generateRecaptch = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': () => {},
      })
    } catch (error) {
      console.warn(error)
    }
  }

  const onSubmit = ( data ) => {
    console.log(data)
    generateRecaptch()
    const appVerifier = window.recaptchaVerifier
    sendSMS(data.phone, appVerifier)
  }

  const sendSMS = ( phone, recaptchaVerifier ) => {
    signInWithPhoneNumber(auth, `+57${phone}`, recaptchaVerifier)
      .then((response) => {
        window.confirmationResult = response
        console.log(response)
        Swal.fire({
          title: 'Excelente!',
          text: `Te enviaremos un mensaje de texto para confirmar al numero celular ${phone}`,
          icon: 'success'
        })
          .then(() => navigate('/insert-code'))
      })
      .catch(error => {
        console.warn(error)
        Swal.fire({
          title: 'Oops',
          text: 'Ha ocurrido un error, no se puede enviar en mensaje de texto',
          icon: 'error'
        })
      })
  }

  return (
    <main>
      <h1 className='text-3xl font-bold underline my-3'>Inicio sesion con numero celular</h1>
      <form
        className='grid justify-start'  
        onSubmit={handleSubmit(onSubmit)}
      >
        <input  
          className='border border-indigo-300 rounded-md my-3 h-10 text-indigo-700 px-5' 
          type='number' 
          placeholder='ingrese su numero celular' 
          { ...register('phone') }
        />
        <button
            className='bg-green-400 text-white h-10 rounded-md my-5 p-5 flex place-items-center flex gap-2'
        >Enviar SMS</button>
      </form>
      <div id='recaptcha-container'></div>
    </main>
  )
}

export default LoginWithPhone;
