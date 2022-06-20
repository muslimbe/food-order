import { useContext } from 'react/cjs/react.development'
import {RestaurantContext} from '../../context/resContext'
import './cart.css'
import FOODS from '../restaurant/query'
// components
import CartComp from '../../components/cart'
import Header from '../../components/header'

function Cart () {
   
   const forCart = JSON.parse(localStorage.getItem('chosen'))

   return(
      <>
         <Header/>

         <section className='cart-wrapper'>
            <CartComp data = {forCart ? forCart : []}/>
         </section>

      </>
   )
}

export default Cart