import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function CardRes({data}){
   const [cameData, setCameData] = useState()
   const history = useHistory()

   useEffect(() => {
      if(data){
         setCameData(data.data)
      }
   },[data])

   return(
      <>

            {cameData && cameData.map(e => (
               <div key={e.id} className="res_item mb-5" style={{"width": "18rem"}}>
                  <img className="card-img-top" src={e.image} alt="Card image cap" height={250}/>
                  <div className="card-body">

                     <h5 className="card-title res_name mb-4">{e.name}</h5>
                     <p className="address mb-1">{e.address}</p>
                     <a href={`tel:${e.number}`} className="res_contact card-text mb-1">{e.number}</a>
                     <a href={e.social_net} target="_blank" className="res_contact card-text mb-3">Ijtimoiy tarmoqda</a>
                     <button dataid={e.id} dataname={e.name} dataimage={e.image} className="btn btn-danger" onClick={(e) => { 
                        const id = e.target.getAttribute('dataid')
                        const name = e.target.getAttribute('dataname')
                        const image = e.target.getAttribute('dataimage')
                        localStorage.setItem("chosenRes", JSON.stringify({
                           id: id,
                           name: name,
                           image: image
                        }))
                        history.push('/restaurants')}}>
                         Ko'rish
                     </button>

                  </div>
               </div>
            ))}

    </>
 )}

export default CardRes