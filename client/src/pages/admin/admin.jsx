import {useQuery, useMutation} from '@apollo/client'
import './style.css'
import {GET_RES_TYPES, ALL_RESTAURANTS, DELETE_RES} from './query'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

function Admin(){

   const [delete_res, {load, err, data}] = useMutation(DELETE_RES)

   const form = useRef()
   const newname = useRef()
   const newaddress = useRef()
   const newnumber = useRef()
   const newimage = useRef()
   let count = 1
   const [resTypes, setResTypes] = useState()
   const [restaurants, setRestaurants] = useState()
   const [chRestaurants, setChRestaurants] = useState()
   const [typeID, setTypeId] = useState()
   const [toggle, setToggle] = useState('')
   const [newRes, setNewRes] = useState({
      name: '',
      address: '',
      number: '',
      image: '',
      ref_id: ''
   })

   const {data: types} = useQuery(GET_RES_TYPES)
   const {data: res_data} = useQuery(ALL_RESTAURANTS)

   function getValue(){
      const name = newname.current.value
      const address = newaddress.current.value
      const number = newnumber.current.value

      setNewRes({
         name: name,
         address: address,
         number: number,
         image: 'default-res.jpg',
         ref_id: typeID
      })
   }

   function clearForm(){
      newname.current.value = ''
      newaddress.current.value = ''
      newnumber.current.value = ''
   }

   useEffect(() => {
      if(types){
         setResTypes(types.res_types)
      }
   },[types] )

   useEffect(() => {
      if(res_data){
         setRestaurants(res_data.get_restaurants)
      }
   },[res_data] )

   return(
      <>
      
         <section className="adminWrapper">
            <div>
               <h3 className='category-title'>Categories</h3>
               <ul className='category-list'>
                  <li className='category-item'>Restaurants</li>
                  <li className='category-item'>Cafes</li>
                  <li className='category-item'>Food</li>
                  <li className='category-item'>Drinks</li>
                  <li className='category-item'>Dessert</li>
               </ul>
            </div>
            <div className='wrapper_add-wrapper'>

               <select className='category-options' name="category" id="" onClick={(e) => {console.log()}} onChange = { async (e) => {
                        const type_name = e.target.value
                        const found_type = resTypes.find((t) => {return t.name == type_name})
                        const filtered_res = restaurants.filter((r) => {return r.ref_id == found_type.id})
                        setChRestaurants(filtered_res)
                        if(e.target.value == "All"){
                          setChRestaurants(restaurants)
                        }
                    }}>

                  <option style={{backgroundColor: "cadetblue"}} value="">choose category</option>
                  {resTypes && resTypes.map(e => (
                     <option className='category-option' key={e.id} >{e.name}</option>
                  ))}

               </select>



               <h4>Categories table</h4>
               
               <table className='table'>
                  <thead>
                     <tr>
                        <th>№</th>
                        <th>NAME</th>
                        <th>DELETE</th>
                     </tr>
                  </thead>
                  <tbody>
                     {chRestaurants && chRestaurants.map((e) => (
                        <tr key={e.id}>
                           <td>{count++}</td>
                           <td>{e.name}</td>
                           <td><button dataid={e.id} className='btn-delete' onClick={(e) => {
                              const id = e.target.getAttribute('dataid')
                              delete_res({
                                 variables: {id: id}
                              })
                              setChRestaurants(chRestaurants.filter(e => e.id !== id))
                           }}>Delete</button></td>
                        </tr>
                     ))}
                  </tbody> 

               </table>

               <button className='btn-add' onClick={() => {setToggle('active')}}>Add</button>
            </div>
         </section>

               {/*                       modal                         */}

         <div className={`modal ${toggle ? toggle : 'not-active'}`} tabIndex="-1" role="dialog">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
               <h5 className="modal-title"></h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {setToggle('not-active')}}>
                  <span aria-hidden="true">&times;</span>
               </button>
               </div>

               <div className="modal-body">
                  <form ref={form}  onSubmit={(e) => {
                     axios.post('http://localhost:4004/newRestaurant', newRes)
                  }}>
                     <select onChange={(e) => {
                        const type_name = e.target.value
                        const {id} = resTypes.find((t) => {return t.name == type_name})
                        setTypeId(id)
                     }}>
                        <option selected={true} disabled>category</option>
                        {resTypes && resTypes.map((e) => (
                           <option key={e.id}>{e.name}</option>
                        ))}
                     </select>
                        <br />
                        <br />
                     <input ref={newname} type="text"  placeholder='Name:' onChange={getValue}/>
                        <br />
                        <br />
                     <input ref={newaddress} type="text" placeholder='Address:' onChange={getValue}/>
                        <br />
                        <br />
                     <input ref={newnumber} type="text" placeholder='Phone number:' onChange={getValue}/>
                        <br />
                        <br />
                     <input ref={newimage} type="text" defaultValue='default-res.jpg' disabled/>

                     <div style={{display: 'flex'}}>
                        <button type="submit" className="btn mr-1 btn-primary" onClick={() => {setToggle('not-active'); clearForm()}}>Add</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => {setToggle('not-active')}}>Close</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         </div>
      
      </>
   )
  }

  export default Admin