import { useState, useEffect } from 'react'

function CardFood({data}){
   const [cameData, setCameData] = useState()
   const [toCart, setToCart] = useState([])

   const inCart = JSON.parse(localStorage.getItem('chosen'))

   useEffect(() => {
      if(inCart){
         setToCart(inCart)
      }
   },[])


   useEffect(() => {
      if(data){
         setCameData(data.data)
      }
   },[data])

   return(
      <>

            {cameData && cameData.map(e => (
               <div key={e.id} className=" food_item mb-5" style={{"width": "18rem"}}>
               <img className="card-img-top" src={e.image} alt="Card image cap" height={250}/>
               <div className="card-body">
                  <h5 className="card-title food_name mb-2">{e.name}</h5>
                  <h6 className='food_price'>{e.price}.000 so'm</h6>
                  <button dataid={e.id} dataname={e.name} dataimage={e.image} dataprice={e.price} className="btn btn-danger" onClick={(e) => { 
                     const id = e.target.getAttribute('dataid')
                     const name = e.target.getAttribute('dataname')
                     const image = e.target.getAttribute('dataimage')
                     const price = e.target.getAttribute('dataprice')
                     const addCart = {
                        id: id,
                        name: name,
                        image: image,
                        price: price
                     }

                     const exist = toCart ? toCart.find(e => {
                        return e.id == addCart.id
                     }) : null

                     if(!exist){
                        toCart.push(addCart)
                        localStorage.setItem("chosen", JSON.stringify(toCart))
                     }
                  }}>
                     Add to cart
                  </button>
               </div>
               </div>
            ))}

    </>
 )}

export default CardFood