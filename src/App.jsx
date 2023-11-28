import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/Login/LoginPage"
import RegisterPage from "./pages/Register/RegisterPage"
import ProtectedRoute from "./utils/ProtectedRoute"


function App() {

  return <>
    <Routes>
      <Route path="/" element={<ProtectedRoute>Hello</ProtectedRoute>}/>
      <Route path="/login" element={ <LoginPage/>} />
      <Route path="/register" element={ <RegisterPage/>} />
    </Routes>
  </>
}

export default App
