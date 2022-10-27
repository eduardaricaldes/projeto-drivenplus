import styled from "styled-components"
import text from "../assets/test.png"
import arrow from "../assets/arrow.svg"
import InputsAssinaturas from "../components/descricao-assinaturas"
import FormAssinatura from "../components/form-assinaturas"

export default function Assinatura(){
  return(
    <EstiloAssinatura>
      <EstiloHeader>
        <div className="botao-voltar">
          <img src={arrow} alt="arrow" />
        </div>
      </EstiloHeader>
      <EstAssinaturaTop>

        <div className="plano">
          <div className="imagem">
            <img src={text} alt="test"/> 
          </div>
          <div className="nomeplano">
            <h2>Driven Plus</h2> 
          </div>
        </div>
        <InputsAssinaturas />
        <FormAssinatura/>
      </EstAssinaturaTop>  
    </EstiloAssinatura>
  )
}
const EstiloAssinatura = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
`
const EstiloHeader = styled.header`
  padding: 22px 22px 12px 22px;
  display: flex;
  justify-content: start;
  .botao-voltar {
    height: 28px;
    width: 28px;
    img {
      width: 100%;
    }
  }
`

const EstAssinaturaTop = styled.div`
  padding: 0 36px 30px 36px;
  .plano {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 22px;
  }
  .nomeplano{
    h2{
      color: #fff;
      font-size: 30px;
      font-weight: bold;
    }
  }
    .imagem{
      height: 95px;
      width: 139px;
      margin-bottom:20px;
      
    img{
      width: 100%;
    }
  }
  
`