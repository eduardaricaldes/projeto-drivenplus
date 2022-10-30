import styled from "styled-components"
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import InputsLogin from "../components/Inputs-login";
import { URL } from '../constant/Api'

import { AutenticacaoContext } from '../contexts/AutenticacaoProvider';
import { UsuarioContext } from '../contexts/UserContext';

export default function Login(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const [token, setToken, logado, setLogado] = useContext(AutenticacaoContext);
  const [usuario, setDadosDoUsuario] = useContext(UsuarioContext);

  function resetarForm() {
    setEmail("");
    setSenha("");
  }

  function setarUsuario(usuario) {
    setDadosDoUsuario({
      id: usuario.id,
      name: usuario.name,
      email: usuario.email,
      membership: usuario.membership,
    });
    setToken(usuario.token);
    setLogado(true);
  }

  function submit(event) {
    event.preventDefault();
    axios.post(URL.LOGIN, {
      email: email,
      password: senha,
    })
    .then((response) => {
      const usuarioResponse = response.data
      setarUsuario(usuarioResponse);

      if(!usuarioResponse.membership) {
        navigate("/subscriptions")
      }
      navigate("/home")
    })
    .catch(() => {
      alert("Usuario e senha incorretos");
      resetarForm()
      event.target.reset();
    })
  }

  function onChangeSenha(value){
    if(value !== "") {
      setSenha(value);
    }
  }

  function onChangeEmail(value){
    if(value!=="") {
      setEmail(value);
    }
  }

  return(
  <Container>
    <div className="logo">
      <img src={logo} alt="logo"></img>
    </div>
    <form onSubmit={submit}>
      <InputsLogin onChangeSenha={onChangeSenha} onChangeEmail={onChangeEmail} />
    </form>
  </Container>
  )
}



const Container = styled.div`
background-color: black;
display: flex;
padding: 134px 38px;
flex-direction: column;
font-family: 'Roboto', sans-serif;
height: 100vh;
justify-content: center;
align-items: center;
  .logo{
      display: flex;
      justify-content: center;
      width: 299px;
      margin-bottom: 100px;
      
      img{
        width: 100%;
      }
  }
`