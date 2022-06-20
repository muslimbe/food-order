import {useEffect, useRef, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useQuery, useLazyQuery} from '@apollo/client'
import {CITIES, DISTRICTS} from './query'
import './style.css'
// components
import Header from '../../components/header'

function Order(){
   const products = JSON.parse(localStorage.getItem('chosen'))
   const total = Number(localStorage.getItem('total'))

   const history = useHistory()

   const modal = useRef()
   const give_order = useRef()
   const c = useRef()
   const d = useRef()
   const a = useRef()
   const n = useRef()
   const num = useRef()
   const [customer, setCustomer] = useState({
      city: '',
      district: '',
      address: '',
      fullname: '',
      number: ''
   })
   const [cities, setCities] = useState()
   const [dists, setDists] = useState()
   const [cityId, setCityId] = useState()
   const [distClass, setDistClass] = useState()

   const {loading, error, data} = useQuery(CITIES)
   const [get_dists,{loading: load_dist, error: err_dist, data: data_dist}] = useLazyQuery(DISTRICTS)
   
   const getValue = () => {
      const city = c.current.value
      const dist = d.current.value
      const address = a.current.value
      const fullname = n.current.value
      const number = num.current.value

      setCustomer({
         city: city,
         district: dist,
         address: address,
         fullname: fullname,
         number: number
      })
   }
   
   useEffect(() => {
      const {city, district, address, fullname, number} = customer
      if(!city && !district && !address && !fullname && !number){
         give_order.current.disabled = true
      }else if(city && district && address && fullname && number){
         give_order.current.disabled = false
      }
   },[customer])
   
   useEffect(() => {
      if(data_dist){
         setDists(data_dist.get_districts);
      }
   },[data_dist])

   useEffect(() => {
      if(data){
         setCities(data.get_cities)
      }
   },[data])

   return(
      <>

         <Header/>
         <section style={{paddingTop: '48px'}}>
            <div className="outer_wrap">
               <form className='order_form' method='post'>
               <h4>Buyurtma berish</h4>

                  <div className='city_wrapper'>
                     <label className='cities citi' style={{color: "white"}}>
                        Shaxar yoki viloyat tanlang
                        <select ref={c} name="city" className="city" onChange={async (event) => {
                           getValue()
                           const [city] = cities.filter(e => e.name == event.target.value)
                           await get_dists({variables: {id: city.id}})
                           setDistClass('active')
                        }}>
                              <option>belgilang</option>
                           {cities && cities.map(c => (
                              <option dataid={c.id} key={c.id}>{c.name}</option>
                           ))}
                        </select>
                     </label>

                     <label className='cities' style={{color: "white"}}>
                        Tuman
                        <select ref={d} name="district" className="district" onChange={getValue}>
                           <option selected>belgilang</option>
                              {dists && dists.map(e => (
                                 <option key={e.id}>
                                    {e.name}
                                 </option>
                              ))}
                        </select>
                     </label>
                  </div>

                  <label className='address' style={{color: "white"}}>
                     Manzil
                     <input ref={a} type="text" placeholder='manzil:' onChange={getValue}/>
                  </label>

                  <div className='user_wrapper'>
                     <label className='user_info user_name' style={{color: "white"}}>
                        Qabul qiluvchining F.I.Sh
                        <input ref={n} type="text" placeholder='f.i.sh:' onChange={getValue}/>
                     </label>

                     <label className='user_info' style={{color: "white"}}>
                        Telefon raqami
                        <input ref={num} type="text" placeholder='raqam:' onChange={getValue}/>
                     </label>
                  </div>

               </form>
                  <div className="col-md-4 summary checkout">
                        <div>
                           <h5><b>Summary</b></h5>
                        </div>
                        <hr/>
                        <div className="row">
                           <div className="col" style={{paddingLeft:'15px'}}>product {products && products.length}</div>
                        </div>
                        <form>
                           <p>Delivery</p> 
                           <select>
                              <option className="text-muted"></option>
                           </select>
                           <p>Kod</p> <input id="code" placeholder="Enter your code"/>
                        </form>
                        <div className="row" style={{borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}>
                           <div className="col">Total</div>
                           <div className="col text-right">{total} 000 so'm</div>
                        </div> 
                        <button ref={give_order} className="btn-check btn" onClick={() => {
                           modal.current.style.display = "flex"
                        }}>Buyurtma berish</button>
                  </div>
            </div>

            <div ref={modal} className="modall"> 
               <div className='in-modal'>
                  <h3 className='in-modal-text'>Sizning buyurtmangiz qabul qilindi</h3>
                  <button className='modal-btn' onClick={() => {
                     localStorage.removeItem('chosen')
                     history.push('/')
                  }}>Ok</button>
               </div>
            </div>
         </section>      

      </>
   )
}

export default Order