import styled from "styled-components"
import logo from "../assets/logo.png";
import InputsLogin from "../components/Inputs-login";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { LOGIN } from '../constant/Api'

export default function Login(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function resetarForm() {
    setEmail("");
    setSenha("");
  }

  function submit(event) {
    event.preventDefault();
    axios.post(LOGIN, {
      email: email,
      password: senha,
    })
    .then((response) => {
      navigate("/")
    })
    .catch(() => {
      resetarForm()
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