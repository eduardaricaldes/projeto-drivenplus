import styled from "styled-components"

export default function Form(){
  return (
    <EstiloFormulario>
      <input type="text" placeholder="Nome impresso no cartão" />
      <input type="text" placeholder="Digitos do cartão" />
      <div className="grupo">
        <input type="number" className="codigo-seguranca" placeholder="Código de segurança" />
        <input type="text" className="validade" placeholder="Validade" />
      </div>
      <button type="submit">ASSINAR</button>
    </EstiloFormulario>
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