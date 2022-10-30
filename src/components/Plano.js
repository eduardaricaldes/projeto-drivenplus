import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Plano(
  {
    id,
    image,
    price,
  }
){
  return (
    <Pacotes>
      <Link 
        to={`/subscriptions/${id}`} className="box">
         <img src={image} alt="teste"/>
         <div className="preco">
          <p>R$ {price.replace('.',',')}</p>
        </div>
      </Link>
    </Pacotes>
  )
}
const Pacotes=styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
  .box{
    display: flex;
    height: 180px;
    background-color:transparent;
    border: 3px solid #7E7E7E;
    border-radius: 8px;
    padding: 42px 16px;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
      img{
        width: 139px;
      }
      .preco{
        color: #fff;
        font-weight: bold;
        font-size: 24px;
      }
  }
`
