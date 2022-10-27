import Planos from "./pages/Planos";
import Assinatura from "./pages/Assinatura"
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Planos/>} path="/subscriptions" />
        <Route element={<Assinatura/>} path="/subscriptions/id" />
      </Routes>
    </BrowserRouter>
  )
}