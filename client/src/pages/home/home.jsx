
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery} from '@apollo/client'
import './home.css'
import { GET_RES_TYPES, ALL_RESTAURANTS } from './query'

//        components
import CardRes from '../../components/card_res'
import Incart from '../../components/incart'


//           context 
import { RestaurantContext } from '../../context/resContext'

//            images
import logo from '../../images/logo.png'
import cart from '../../images/yellow.png'

//             RENDER COMPONENT              //
function Home (){
  
  const incart = JSON.parse(localStorage.getItem('chosen'))
  const history = useHistory()
  const {loading: res_load, error: res_err, data: res_data} = useQuery(ALL_RESTAURANTS)
  const {loading: type_load, error:type_err, data:type_data} = useQuery(GET_RES_TYPES)

  //             use states
  
  const [restaurants, setRestaurants] = useState()
  const [chRestaurants, setChRestaurants] = useState()
  const [activeDrop, setActiveDrop] = useState('not-active')
  const [resTypes, setResTypes] = useState()


//              USE EFFECT              //
useEffect(() => {
  if(type_data){
    setResTypes(type_data.res_types)
  }
}, [type_data])

useEffect(() => {
  if(res_data){
    setRestaurants(res_data.get_restaurants)
    setChRestaurants(res_data.get_restaurants)
  }
}, [res_data])


//                                      render                                       //

   return(

      <>  

          <header className='header container-md nav-justified ' id='header'>

            <nav className="navbar navbar-expand-md">
              
              <img className='logo' src={logo} alt="logo" width={100} height={100} />
              <a className="h2 ml-2 mr-5 text-warning" href="#">Restoranlar</a>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link text-info" href="#">Haqimizda <span className="sr-only">(current)</span></a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-info" href="#">Aloqa</a>
                  </li>

                  <li className="nav-item dropdown dropdownToggle"  
                        onMouseOver ={(e) => { setActiveDrop('active') }} 
                        onMouseOut={ () => { setActiveDrop('not-active') }} >

                    <a className="nav-link text-info" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        Restoranlar
                    </a>

                    <ul className={`bg-dark ${activeDrop}`} id="dropMenu">
                      {resTypes && resTypes.map((element) => (
                        <li dataid={element.id} key={element.id} className="dropItem" onClick = { async (e) => {
                            const type_id = e.target.getAttribute('dataId')
                            const filtered_res = restaurants.filter((t) => {return t.ref_id == type_id})
                            setChRestaurants(filtered_res)
                            if(e.target.textContent == "All"){
                              setChRestaurants(restaurants)
                            }
                        }}>
                            {element.name}
                      </li>
                      ))}
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link text-info" href="#">Kafelar</a>
                  </li>
                </ul>
                <form className="searchForm my-2 my-lg-0 ">
                  <input className="form-control mr-sm-1" type="search" placeholder="Qidiruv" aria-label="Search"/>
                  <button className=" btn-outline-success my-sm-0 searchBtn" type="submit">Izlash</button>

                </form>
                <Incart/>
              </div>
            </nav>
            <span className='line'></span>

          </header>

          <section className='restaurants-section pt-5 container-md pl-4 pr-4'>
            <div className='restaurants-wrapper row'>

              <CardRes data={{
                data: chRestaurants
              }}/>

            </div>
          </section>
      </>
   )
}

export {
   Home,
};
