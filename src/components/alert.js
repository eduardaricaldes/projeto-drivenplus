
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
export default function Alert({confirmarAssinatura}){
  useEffect(() => {
    Swal.fire({
      })
      MySwal.fire({
        title: 'Tem certeza que deseja assinar o plano?',
        html:'nome do plano e preço',
        showCancelButton: true,
        cancelButtonColor:'#CECECE',
        cancelButtonText: 'NÃO',
        confirmButtonColor: '#FF4791',
        confirmButtonText: 'SIM',
        onConfirmButtonText: 'Yes, delete it!',
        allowOutsideClick: false,
        
    }).then((response) => {
      if(response.isDismissed) {
        console.log('HERE')
      }else if(response.isConfirmed) {
        console.log('CONFIRMADO')
        confirmarAssinatura();
      }
    })
  }, [])

  return(
    <></>    
  )
}



