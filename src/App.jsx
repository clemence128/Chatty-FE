import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/Login/LoginPage"


function App() {
  return <>
    <Routes>
      <Route path="/" element={<></>}/>
      <Route path="/login" element={ <LoginPage/>} />
    </Routes>
  </>
}

export default App
