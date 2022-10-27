import Login from "./pages/Login";
import SignUp from "./pages/Sign-up";
import Planos from "./pages/Planos";
import Assinatura from "./pages/Assinatura";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/"/>
        <Route element={<SignUp />} path="/signup"/>
        <Route element={<Planos/>} path="/subscriptions" />
        <Route element={<Assinatura/>} path="/subscriptions/id" />
        <Route element={<Home />} path="/home"/>
      </Routes>
    </BrowserRouter>
  )
}