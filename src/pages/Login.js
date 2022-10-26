import styled from "styled-components"
import logo from "../assets/logo.png";
import InputsLogin from "../components/Inputs-login";

export default function Login(){
  return(
  <Container>
    <div className="logo">
      <img src={logo} alt="logo"></img>
    </div>
    <InputsLogin />
  </Container>
  )
}



const Container = styled.div`
background-color: black;
display: flex;
justify-content: center;
padding: 134px 38px 38px 38px;
flex-direction: column;
font-family: 'Roboto', sans-serif;
height: 100vh;

  .logo{
      height: 49px;
      width: 299px;
      margin-bottom: 100px;
      
      img{
        width: 100%;
      }
  }
`