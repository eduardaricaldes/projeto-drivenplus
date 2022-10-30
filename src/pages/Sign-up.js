import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import InputSignUp from "../components/Inputs-Sign-Up"
import { URL } from '../constant/Api';

export default function SignUp(){
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  
  const navigate = useNavigate();

  function onChangeNome(value) {
    if(value !== "") {
      setNome(value)
    }
  }

  function onChangeEmail(value) {
    if(value !== "") {
      setEmail(value)
    }
  }

  function onChangeCPF(value) {
    if(value !== "") {
      setCpf(value)
    }
  }

  function onChangeSenha(value) {
    if(value !== "") {
      setSenha(value)
    }
  }

  function resetarForm() {
    setEmail("");
    setSenha("");
    setNome("");
    setCpf("");
  }

  function submit(event) {
    event.preventDefault();
    axios.post(URL.CADASTRO, {
        email: email,
        name: nome,
        password: senha,
        cpf: cpf,
    })
    .then((response) => {
      navigate("/")
    })
    .catch(() => {
      resetarForm()
      alert("erro ao enviar os dados")
      event.target.reset()
    })
  }

  return(
    <ContainerSignUp>
      <form onSubmit={submit}>
        <InputSignUp
          onChangeNome={onChangeNome}
          onChangeEmail={onChangeEmail}
          onChangeSenha={onChangeSenha}
          onChangeCPF={onChangeCPF}
        />
      </form>
    </ContainerSignUp>

  )
}

const ContainerSignUp = styled.div`
background-color: black;
display: flex;
justify-content: center;
padding: 134px 38px;
flex-direction: column;
font-family: 'Roboto', sans-serif;
height: 100vh;
`