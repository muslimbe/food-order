import { useHistory } from 'react-router-dom'
import yellow from '../images/yellow.png'

function Incart(){

   const history = useHistory()
   const incart = JSON.parse(localStorage.getItem('chosen'))

   return(

      <div style={{position: 'relative'}}>
         <img src={yellow} alt="cart" width={30} height={38} onClick={()=>{history.push('/cart')}}/>
         <span className='cart-count'>{incart && incart.length}</span>
      </div>

   )}

   export default Incart