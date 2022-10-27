import styled from "styled-components"
import perfil from "../assets/perfil.svg"
import imagemplano from "../assets/test.png"
import Materiais from "../components/Home-materiais"

export default function Home (){
  return(
  <>
    <TopBar>
      <div className="foto-plano">
        <img src={imagemplano} alt="logo"/>
      </div>
      <div className="perfil">
        <img src={perfil} alt="pefil"/>
      </div>
    </TopBar>
    <EstHome>
      <h2>Olá, fulano</h2>
      <Materiais />
    </EstHome>
  </>
  )
}

const EstHome = styled.div`
background-color: black;
display: flex;
padding: 28px 38px;
flex-direction: column;
font-family: 'Roboto', sans-serif;
height: 100vh;
text-align: center;
  h2{
    color: #fff;
    font-size:24px;
    font-weight:700;
    margin-bottom: 53px;
  }

`
const TopBar = styled.div`
padding: 22px 22px 12px 22px;
background-color: black;
display: flex;
justify-content: space-between;
  .foto-plano{
    height: 50px;
    width: 74px;
      img{
        width: 100%;
      }
  }
`