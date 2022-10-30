
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
export default function Alert({confirmarAssinatura, assinatura}){
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
        onConfirmButtonText: 'Yes, delete it!',
        allowOutsideClick: false,
    }).then((response) => {
      if(response.isDismissed) {
      }else if(response.isConfirmed) {
        confirmarAssinatura();
      }
    })
  }, [])

  return(
    <></>    
  )
}



