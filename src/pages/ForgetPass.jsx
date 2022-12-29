import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Alert from '../components/Alert'
import axios from "axios"

const ForgetPass = () => {

  const [alert, setAlert] = useState({})
  const [email, setEmail] = useState('')


  const handleSubmit = async e => {
    e.preventDefault()

    if (!email || email === '') {
      setAlert({
        error: true,
        message: 'El email es obligatorio'
      })
      return
    }
    try {
      let { data } =
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login/forget-password/`,
          { email })
      setAlert({ error: false, message: data.message })
    } catch (error) {
      setAlert({ error: true, message: error.response.data.message })
    }
  }

  const { message } = alert

  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>
        Recupera tu acceso y no pierdas tus
        <span className='text-slate-700'> proyectos.</span>
      </h1>
      {message && <Alert alert={alert} />}
      <form onSubmit={handleSubmit} className='my-10 bg-white shadow rounded-lg px-10 py-10'>
        <div>
          <label
            className='uppercase text-gray-600 block text-xl font-bold mt-3'
            htmlFor='email'
          >Email
          </label>
          <input
            id='email'
            type="email"
            placeholder="Email de registro"
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <button className='
        bg-sky-700 w-full py-3 text-white uppercased font-bold rounded hover:cursor-pointer
        hover:bg-sky-800 transition-colors mt-8
        '
        >Enviar instrucciones</button>
      </form>



      <nav className='lg:flex lg:justify-between'>
        <Link
          className='block text-center my-5 text-slate-500 uppercase text-sm'
          to="/"
        >
          Ya tienes una cuenta? Inicia Sesion
        </Link>

        <Link
          className='block text-center my-5 text-slate-500 uppercase text-sm'
          to="registrar"
        >
          No tienes una cuenta aun? Registrate
        </Link>
      </nav>
    </>
  )
}

export default ForgetPass