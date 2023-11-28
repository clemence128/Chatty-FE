import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/Login/LoginPage"
import RegisterPage from "./pages/Register/RegisterPage"


function App() {

  return <>
    <Routes>
      <Route path="/" element={<></>}/>
      <Route path="/login" element={ <LoginPage/>} />
      <Route path="/register" element={ <RegisterPage/>} />
    </Routes>
  </>
}

export default App
