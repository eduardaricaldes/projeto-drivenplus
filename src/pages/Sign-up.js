import styled from "styled-components"
import InputSignUp from "../components/Inputs-Sign-Up"

export default function SignUp(){
  return(
    <ContainerSignUp>
      <InputSignUp />
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