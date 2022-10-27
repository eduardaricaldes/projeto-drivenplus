import styled from "styled-components";
import Plano from "../components/Plano";

export default function Planos(){
  return(
    <ContainerPlanos>
      <h1>Escolha seu Plano</h1>
      <Plano/>
    </ContainerPlanos>
  )
}

const ContainerPlanos = styled.div`
background-color: black;
display: flex;
padding: 28px 38px;
flex-direction: column;
font-family: 'Roboto', sans-serif;
height: 100vh;

  h1{
    color: #fff;
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 32px;
    text-align: center;
  }
`