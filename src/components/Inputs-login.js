import styled from "styled-components"


export default  function InputsLogin (){
  return(
    <EstInputs>
      <input className="email" placeholder="E-mail" type="email"></input>
      <input className="password" type="password" placeholder="Senha"></input>
      <button className="botao">ENTRAR</button>
    </EstInputs>
  )
} 

const EstInputs=styled.div`
display: flex;
flex-direction: column;
  input{
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
    font-size: 14px
  }

`