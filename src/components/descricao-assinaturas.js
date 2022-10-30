import styled from "styled-components"
import beneficios from "../assets/beneficios.png"
import preco from "../assets/preco.png"

export default function InputsAssinaturas({ perks, price }){
  return(
    <InpAssinaturas>
      <EstiloBeneficios>
         <div className="header">
          <img src={beneficios} alt="beneficios" />
          <h3>Benefícios:</h3>
         </div>
         <ul className="lista-beneficios">
          {
            perks?.map((perk, index) => {
              return (
                <li key={perk.id}>
                  <a className="beneficio" href={perk.link}>
                    <span className="id">{index+=1}.</span>
                    <span className="nome-beneficio">{perk.title}</span>
                  </a>
                </li>
              )
            })
          }
         </ul>
      </EstiloBeneficios>
      <EstiloPreco>
         <div className="header">
            <img src={preco} alt="preco" />
            <h3>Preço:</h3>
         </div>
         <div className="preco">
            <p>R$ {price?.replace('.',',')} cobrados mensalmente</p>
         </div>
      </EstiloPreco>
    </InpAssinaturas>
  )
}

const InpAssinaturas = styled.div `
display: flex;
justify-content: flex-start;
flex-direction: column;
`
const EstiloBeneficios = styled.div`
  margin-bottom: 12px;
    .header {
      color: #fff;
      display: flex;
      margin-bottom: 10px;
      img {
        width: 13px;
        height: 16px;
        margin-right: 5px;
      }
      h3 {
        font-size: 16px;
        font-weight: 300;
      }
    }
  .lista-beneficios {
    color: #fff;
    font-size: 14px;
    li {
      line-height: 16px;
    }    
    span {
      font-weight: 300;
    }
    .beneficio {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      .id {
        margin-right: 5px;
      }
    }
  }
`

const EstiloPreco = styled.div`
  margin-bottom: 30px;
  .header {
      color: #fff;
      display: flex;
      margin-bottom: 10px;
      img {
        width: 20px;
        height: 15px;
        margin-right: 3px;
        margin-left: -3px;
      }
      h3 {
        font-size: 16px;
        font-weight: 300;
      }
    }
  .preco {
    color: #fff;
    font-size: 14px;
    font-weight: 300;
  }
`