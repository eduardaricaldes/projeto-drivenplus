import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import axios from "axios";

import Alert from "../components/alert"
import { AutenticacaoContext } from '../contexts/AutenticacaoProvider';
import { UsuarioContext } from '../contexts/UserContext';

import { URL } from '../constant/Api'

export default function Form({ assinatura }){
  const [token] = useContext(AutenticacaoContext);
  const [usuario, setDadosDoUsuario, atualizarMembership] = useContext(UsuarioContext);
  const [abrirAlert, setAbrirAlert] = useState(false);
  const [nomeCartao, setNomeCartao] = useState("");
  const [digitos, setDigitos] = useState("");
  const [codigo, setCodigo] = useState(0);
  const [validade, setValidade] = useState("");
  const navigate = useNavigate();

  function resetarForm() {
    setNomeCartao("");
    setDigitos("");
    setCodigo(0);
    setValidade("");
  }

  function confirmarAssinatura() {
    axios.post(URL.ASSINAR_PLANO, {
        membershipId: assinatura.id,
        cardName: nomeCartao,
        cardNumber: digitos,
        securityNumber: codigo,
        expirationDate: validade,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      resetarForm();
      const mermbership = response.data;
      atualizarMembership(mermbership)
      navigate('/home');
    }).catch(() => {
      resetarForm()
      alert('Problema ao assinar')
    })
  }

  function onChangeNomeCartao(value) {
    if(value !== "") {
      setNomeCartao(value)
    }
  }

  function onChangeDigitos(value) {
    if(value !== "") {
      setDigitos(value)
    }
  }

  function onChangeCodigo(value) {
    if(value !== undefined) {
      setCodigo(value)
    }
  }

  function onChangeValidade(value) {
    if(value !== "") {
      setValidade(value)
    }
  }

  function assinar(event) {
    event.preventDefault();
    setAbrirAlert(true)
  }

  return (
    <>
      <EstiloFormulario onSubmit={assinar}>
        <input type="text" placeholder="Nome impresso no cartão" onChange={event => onChangeNomeCartao(event.target.value)}/>
        <input type="text" placeholder="Digitos do cartão" onChange={event => onChangeDigitos(event.target.value)}/>
        <div className="grupo">
          <input type="number" className="codigo-seguranca" placeholder="Código de segurança" onChange={event => onChangeCodigo(event.target.value)}/>
          <input type="text" className="validade" placeholder="Validade" onChange={event => onChangeValidade(event.target.value)}/>
        </div>
        <button type="submit">ASSINAR</button>
      </EstiloFormulario>
      {
        abrirAlert === true ? (
          <Alert
            confirmarAssinatura={confirmarAssinatura}
            assinatura={`<h3 class="tituloAlert">Tem certeza que deseja assinar o plano ${assinatura.name} (R$ ${assinatura.price.replace('.', ',')}) ?</h3>`}
          />
        ) : <></>
      }
    </>
  )
}

const EstiloFormulario = styled.form`
  display: flex;
  flex-direction: column;
  input {
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
  button {
    height: 52px;
    background-color: #FF4791;
    color: #fff;
    border-radius: 8px;
    font-weight: 500;
  }
  .grupo {
    display: flex;
    justify-content: space-between;
    input:first-child {
      margin-right: 10px;
    }
  }
`