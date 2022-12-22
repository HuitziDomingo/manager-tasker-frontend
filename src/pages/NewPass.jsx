import { Link } from 'react-router-dom'
const NewPass = () => {
  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>
        Restablece tu pasawoed y bo pierdas acceso tus
        <span className='text-slate-700'> proyectos.</span>
      </h1>
      <form className='my-10 bg-white shadow rounded-lg px-10 py-10'>
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
          />
        </div>

        <button className='
        bg-sky-700 w-full py-3 text-white uppercased font-bold rounded hover:cursor-pointer
        hover:bg-sky-800 transition-colors mt-8
        '
        >Guardar Nuevo Password</button>
      </form>
    </>
  )
}

export default NewPass
