import styled from "styled-components"

export default function Materiais(){
  return(
    <>
    <Container>
      <ButtonTop>
        <button type="submit">Solicitar brindes</button>
        <button type="submit">Materiais bônus de web</button>
      </ButtonTop>
    </Container>
    <ButtonEnd>
        <button className="trocar"type="submit">Mudar plano</button>
        <button className="cancelar" type="submit">cancelar</button>
    </ButtonEnd>
  </>
  )
}
const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap ;
input {
  flex-wrap:wrap ;
    font-size: 14px;
    font-weight: 300;
    color: #7E7E7E;
    margin-bottom: 8px;
    height: 52px;
    padding: 0 14px;
    line-height: 16.41px;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
  }
`

const ButtonTop = styled.div`
margin-top: 8px;
flex-wrap:wrap ;
button {
    height: 52px;
    background-color: #FF4791;
    color: #fff;
    border-radius: 8px;
    font-weight: 500;
    width: 300px;
    margin-top: 8px;
  }
`

const ButtonEnd = styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap ;
bottom: 0;
position: fixed;
margin-bottom: 12px;
button {
    height: 52px;
    color: #fff;
    border-radius: 8px;
    font-weight: 500;
    width: 300px;
    margin-top: 8px;
  }

  .cancelar{
    background-color: #FF4791;
    color: #fff;
  }

  .trocar{
    background-color: #FF4747;
    color: #fff;

  }
`