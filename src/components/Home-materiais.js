import styled from "styled-components"

export default function Materiais({ membership }){
  return(
    <>
    <ButtonTop>
        {
          membership?.perks?.map((item) => {
            return (
              <a key={item.id} className="link" href={item.link}>{item.title}</a>
            );
          })
        }
      </ButtonTop>
    <ButtonEnd>
        <button className="trocar"type="submit">Mudar plano</button>
        <button className="cancelar" type="submit">Cancelar</button>
    </ButtonEnd>
  </>
  )
}

const ButtonTop = styled.div`
margin-top: 8px;
display: flex;
flex-direction: column;
align-items: center;
  .link {
    text-decoration: none;
    height: 52px;
    background-color: #FF4791;
    color: #fff;
    border-radius: 8px;
    font-weight: 500;
    margin-top: 8px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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