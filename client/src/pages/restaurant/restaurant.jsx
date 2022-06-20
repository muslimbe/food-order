import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useQuery } from "@apollo/client"

import FOODS from './query'
import logo from '../../images/logo.png'
import './restaurant.css'

// components
import CardFood from '../../components/card_food'
import Incart from '../../components/incart'

function Restaurants() {
   const history = useHistory()
   const chosenRes = JSON.parse(localStorage.getItem("chosenRes"))

   const {loading, error, data} = useQuery(FOODS, {
      variables: {
         id: chosenRes.id
      }
   })

   const [food, setFood] = useState()

   useEffect(async () => {
      if(data){
         setFood(data.get_food)
      }
   },[data])


   return(
      <> 
            <header className='header container-md' id='header'>
               <nav className="navbar navbar-expand-md">
               
                  <img className='logo' src={logo} alt="logo" width={100} height={100} />
                  <a className="h2 ml-2 mr-5 text-warning" href="/">Milliy taomlar</a>
                  
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                           <a className="nav-link text-info" href="/">Asosiy</a>
                        </li>

                        <li className="nav-item">
                           <a className="nav-link text-info" href="#">Aloqa</a>
                        </li>

                        <li className="nav-item">
                           <p className="nav-link text-info nav-p" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                              Ovqatlar
                           </p>
                        </li>

                        <li className="nav-item">
                           <p className="nav-link text-info nav-p" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                              Ichimliklar
                           </p>
                        </li>
                     </ul>

                     <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Qidiruv" aria-label="Search"/>
                        <button className="btn-outline-success my-sm-0" type="submit" style={{border: 'solid 1px', borderRadius: '5px'}}>Izlash</button>
                     </form>
                     <Incart/>
                  </div>
               </nav>
               <span className='line'></span>
            </header>

            <section className="foods-wrapper container-md  pt-5">
               <CardFood data={{data: food && food}}/>
            </section>
      </>
   )}

export default Restaurants