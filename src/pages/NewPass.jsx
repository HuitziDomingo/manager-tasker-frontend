import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Alert from '../components/Alert'

const NewPass = () => {

  const [tokenChecked, setTokenChecked] = useState(false)
  const [passwordModified, setPasswordModified] = useState(false)
  const [password, setPass] = useState('')
  const [alert, setAlert] = useState({})
  const params = useParams()
  const { token } = params

  useEffect(() => {
    const checkToken = async () => {
      //TODO: Mover hacia un cliente axios
      try {
        await axios(`http://localhost:4000/api/users/login/forget-password/${token}`)
        setTokenChecked(true)

      } catch (error) {
        setAlert({
          error: true,
          message: error.response.data.message
        })
      }
    }

    checkToken()

  }, [])

  const { message } = alert


  const handleSubmit = async e => {
    e.preventDefault()
    if (password.length < 6) {
      setAlert({
        error: true,
        message: 'El password requiere 6 caracteres al menos.'.toUpperCase()
      })
      return
    }

    try {
      let { data } =
        await axios.post(`http://localhost:4000/api/users/login/forget-password/${token}`, {
        password
      })
      
      setAlert({ error: false, message: data.message })
      setPasswordModified(true)
    } catch (error) {
      setAlert({ error: true, message: error.response.data.message })
    }
  }

  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>
        Restablece tu pasawoed y no pierdas acceso tus
        <span className='text-slate-700'> proyectos.</span>
      </h1>
      {message && <Alert alert={alert} />}
      {
        tokenChecked && (
          <form
            className='my-10 bg-white shadow rounded-lg px-10 py-10'
            onSubmit={handleSubmit}
          >
            <div>
              <label
                className='uppercase text-gray-600 block text-xl font-bold mt-3'
                htmlFor='password'
              >Nuevo Password
              </label>
              <input
                id='password'
                type="password"
                placeholder="Escribi tu nuevos password"
                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                onChange={e => setPass(e.target.value)}
                value={password}
              />
            </div>

            <button className='
        bg-sky-700 w-full py-3 text-white uppercased font-bold rounded hover:cursor-pointer
        hover:bg-sky-800 transition-colors mt-8
        '
            >Guardar Nuevo Password</button>
          </form>
        )
      }
      {passwordModified && (
        <Link
          className='block text-center my-5 text-slate-500 uppercase text-sm'
          to="/"
        >
          Inicia Sesion
        </Link>
      )}
    </>
  )
}

export default NewPass
