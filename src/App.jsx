import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import ConfirmAccount from "./pages/ConfirmAccount"
import ForgetPass from "./pages/ForgetPass"
import Login from "./pages/Login"
import NewPass from "./pages/NewPass"
import Register from "./pages/Register"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />} >
          <Route index element={<Login />} />
          <Route path="registrar" element={<Register />} />
          <Route path="olvide-password" element={<ForgetPass />} />
          <Route path="olvide-password/:token" element={<NewPass />} />
          <Route path="confirmar/:id" element={<ConfirmAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App