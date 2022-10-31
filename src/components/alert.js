
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
export default function Alert({confirmarAssinatura, assinatura, setAbrirAlert }){
  useEffect(() => {
    Swal.fire({
      })
      MySwal.fire({
        html: assinatura,
        showCancelButton: true,
        cancelButtonColor:'#CECECE',
        cancelButtonText: 'NÃO',
        confirmButtonColor: '#FF4791',
        confirmButtonText: 'SIM',
        allowOutsideClick: false,
    }).then((response) => {
      if(response.isConfirmed) {
        confirmarAssinatura();
      }else {
        setAbrirAlert(false);
      }
    })
  }, [])

  return(
    <></>    
  )
}



