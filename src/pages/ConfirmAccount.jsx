import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Alert from '../components/Alert'
import axios from "axios"

const ConfirmAccount = () => {

  const [alert, setAlert] = useState({})
  const [confirmationAccount, setConfirmationAccount] = useState(false)
  const params = useParams()
  const { id } = params

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        
        let url = `http://localhost:4000/api/users/login/${id}`
        let { data } = await axios(url)
        console.log(data)
        
        setAlert({
          message: data.message,
          error: false
        })

        setConfirmationAccount(true)
      } catch (error) {
        setAlert({
          message: error.response.data.message,
          error: true,
        })
        console.log('no')
      }
    }
    confirmAccount()
  }, [])

  const { message } = alert

  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>
        Confirma tu cuenta y comienza a crear tus proyectos
        <span className='text-slate-700'> proyectos.</span>
      </h1>
      <div>
        
        {message && <Alert alert={alert} />}

        {confirmationAccount && (
          <Link
            className='block text-center my-5 text-slate-500 uppercase text-sm'
            to="/"
          >
            Inicia Sesion
          </Link>
        )}
      </div>
    </>
  )
}

export default ConfirmAccount