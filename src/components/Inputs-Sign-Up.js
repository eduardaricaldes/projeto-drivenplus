import styled from "styled-components"
import { Link } from "react-router-dom";

export default function InputSignUp(
  {
    onChangeNome,
    onChangeEmail,
    onChangeSenha,
    onChangeCPF,
  }
){
  return(
    <EstInputSignUp>
      <input placeholder="Nome" type="text" onChange={event => onChangeNome(event.target.value)}/>
      <input placeholder="E-mail" type="email" onChange={event => onChangeEmail(event.target.value)}/>
      <input placeholder="CPF" type="text" onChange={event => onChangeCPF(event.target.value)}/>
      <input type="password" placeholder="Senha" onChange={event => onChangeSenha(event.target.value)}/>
      <button className="botao">CADASTRAR</button>
      <Link to="/" className="cadastrar">Já possuí uma conta? Entre</Link>
    </EstInputSignUp>
  )
}

const EstInputSignUp=styled.div`
display: flex;
flex-direction: column;
  input{
    display: block;
    margin-bottom: 16px;
    border-radius: 8px;
    height: 52px;
    padding: 18px 14px;
    font-size: 14px;
  }
  .botao{
    height: 52px;
    border-radius: 8px;
    background-color: #FF4791;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 25px;
  }

  .cadastrar{
    font-size: 12px;
    color:#fff;
    text-align: center;
  }

`
