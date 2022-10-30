import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

import Plano from "../components/Plano";
import { AutenticacaoContext } from '../contexts/AutenticacaoProvider';

import { URL } from '../constant/Api'

export default function Planos(){
  const [subscriptions, setSubscriptions] = useState([]);
  const [token] = useContext(AutenticacaoContext);

  useEffect(() => {
    if(token) {
      axios(URL.LISTAR_PLANOS, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        const dados = response.data;
        setSubscriptions(dados)
      }).catch(() => {
        alert('Não conseguimos baixar os planos')
      });
    }
  }, [])

  return(
    <ContainerPlanos>
      <h1>Escolha seu Plano</h1>
      {
        subscriptions.map((plano) => {
          return (
            <Plano
              key={plano.id}
              id={plano.id}
              image={plano.image}
              price={plano.price}
            />
          )
        })
      }
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