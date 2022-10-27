import styled from "styled-components"
import { Link } from "react-router-dom";

export default function InputSignUp (){
  return(
    <EstInputSignUp>
      <input className="Nome" placeholder="Nome" type="text"></input>
      <input className="email" placeholder="E-mail" type="email"></input>
      <input className="number" placeholder="CPF" type="number"></input>
      <input className="password" type="password" placeholder="Senha"></input>


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
    width: 299px;

      ::placeholder{
        padding: 18px 14px;
        font-size: 14px;
      }
  }
  .botao{
    width: 298px;
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
