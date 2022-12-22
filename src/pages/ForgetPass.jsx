import { Link } from "react-router-dom"

const ForgetPass = () => {
  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>
        Recupera tu acceso y no pierdas tus 
        <span className='text-slate-700'> proyectos.</span>
      </h1>
      <form className='my-10 bg-white shadow rounded-lg px-10 py-10'>
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