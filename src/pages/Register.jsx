import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import Alert from '../components/Alert'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPasswor] = useState('')
  const [repitPassword, setRepitPassword] = useState('')

  const [alert, setAlert] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()

    if ([name, email, password, repitPassword].includes('')) {
      setAlert({
        message: 'Todos los campos son obligatorios.',
        error: true,
      })
      return
    }

    if (password !== repitPassword) {
      setAlert({
        message: 'El password es diferente en ambos campos.',
        error: true,
      })
      return
    }

    if (password.length < 6) {
      setAlert({
        message: 'El password es corto se necesitan 6 caracteres.',
        error: true,
      })
      return
    }

    setAlert({})

    //Crear el usuario en la API
    try {
      let { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
        name, email, password
      })
      setAlert({
        message: data.message,
        error: false,
      })
      
      setName('')
      setEmail('')
      setPasswor('')
      setRepitPassword('')

    } catch (error) {
      setAlert({
        message: error.response.data.message,
        error: true,
      })
    }
  }

  const { message } = alert

  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>
        Crea tu cuenta y administra tus
        <span className='text-slate-700'> proyectos.</span>
      </h1>
      {message && <Alert alert={alert} />}
      <form
        className='my-10 bg-white shadow rounded-lg px-10 py-10'
        onSubmit={handleSubmit}
      >
        <div>
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='name'
          >Nombre
          </label>
          <input
            id='name'
            type="text"
            placeholder="Tu Nombre"
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
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
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            className='uppercase text-gray-600 block text-xl font-bold mt-3'
            htmlFor='password'
          >Password
          </label>
          <input
            id='password'
            type="password"
            placeholder="Clave"
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={password}
            onChange={e => setPasswor(e.target.value)}
          />
        </div>
        <div>
          <label
            className='uppercase text-gray-600 block text-xl font-bold mt-3'
            htmlFor='password2'
          >Repetir Password
          </label>
          <input
            id='password2'
            type="password"
            placeholder="Repetir Clave"
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={repitPassword}
            onChange={e => setRepitPassword(e.target.value)}
          />
        </div>

        <button className='
        bg-sky-700 w-full py-3 text-white uppercased font-bold rounded hover:cursor-pointer
        hover:bg-sky-800 transition-colors mt-8
        '
        >Crear Cuenta</button>
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
          to="olvide-password"
        >
          Olvide mi password
        </Link>
      </nav>
    </>
  )
}

export default Register
