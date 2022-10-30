import styled from "styled-components"
import { Link } from "react-router-dom";

export default  function InputsLogin({ onChangeSenha, onChangeEmail }){
  return(
    <EstInputs>
      <input className="email" placeholder="E-mail" type="email" onChange={onChangeEmail} />
      <input className="password" type="password" placeholder="Senha" onChange={onChangeSenha} />
      <button className="botao">ENTRAR</button>
      <Link to="/sign-up" className="cadastrar">Não possuí uma conta? Cadastre-se</Link>
    </EstInputs>
  )
} 

const EstInputs=styled.div`
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