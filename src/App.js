import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import {AutenticacaoContext} from './contexts/AutenticacaoProvider'

import Login from "./pages/Login";
import SignUp from "./pages/Sign-up";
import Planos from "./pages/Planos";
import Assinatura from "./pages/Assinatura";
import Home from "./pages/Home";

const RotaPrivada = ({ Componente }) => {
  const [token, setToken, logado] = useContext(AutenticacaoContext)

  return logado ? <Componente /> : <Login />
}

export default function App(){
  return(
    <Routes>
      <Route element={<Login/>} path="/"/>
      <Route element={<SignUp />} path="/sign-up"/>
      <Route element={<RotaPrivada Componente={Planos}/>} path="/subscriptions" />
      <Route element={<RotaPrivada Componente={Assinatura}/>} path="/subscriptions/:id" />
      <Route element={<RotaPrivada Componente={Home}/>} path="/home"/>
    </Routes>
  )
}