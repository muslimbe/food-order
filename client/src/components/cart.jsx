import {useState, useEffect, useRef} from 'react'
import {useHistory, Redirect} from 'react-router-dom'

function CartComp(){
   const history = useHistory()

   const data = JSON.parse(localStorage.getItem("chosen"))

   const [total, setTotal] = useState(0)
   const [indexP, setIndexP] = useState()
   const [indexM, setIndexM] = useState()
   const [cameData, setCameData] = useState()
   let [count, setCount] = useState(-1)
   const price = useRef()

   useEffect(() => {
      if(data){
         setCameData(data)
      }
   },[])

   useEffect(() => {
      let ttl = 0
      if(cameData){
         cameData.forEach(e => {
            ttl += Number(e.price)
         })
         setTotal(ttl);
         if(cameData.length == 0){
            history.push('/')
         }
      }
   },[cameData])


   useEffect(() => {
      if(indexP){
         let last =  total + (cameData[indexP].price - 0)
         setTotal(last)
      }
      setIndexP(undefined)
   },[indexP])

   useEffect(() => {
      if(indexM){
         let last =  total - (cameData[indexM].price - 0)
         setTotal(last)
      }
      setIndexM(undefined)
   },[indexM])



   return(
      <>

         <div className="cartCard">
            <div className="wrapper">
               <div className="col-md-8 cart">
                     <div className="title">
                        <div className="row">
                           <div className="col">
                                 <h4><b>Cart</b></h4>
                           </div>
                           <div className="col align-self-center text-right item-count">{cameData && cameData.length} product</div>
                        </div>
                     </div>
                     <ul className="cartList">
                        {cameData && cameData.map(e => (
                           count++,
                           <li key={e.id} className="row main border-top align-items-center">
                              <div className="col-2"><img className="img-fluid pro-img" src={e.image}/></div>
                              <div className="col">
                                    <p className="row foodName">{e.name}</p>
                              </div>
                              <div className="col">
                                 <button index={count} className="btn_count" onClick={(e)=>{
                                    let el = e.target.nextSibling.textContent; 
                                    if(el!=1){
                                       e.target.nextSibling.textContent = el - 0 - 1
                                       setIndexM(e.target.getAttribute("index"))
                                    }                                    
                                 }}>-</button>

                                 <p style={{display:"inline", marginLeft:'5px', fontWeight:'500'}} defaultValue={1}>1</p> 

                                 <button index={count} className="btn_count" onClick={(event)=>{
                                    let el = event.target.previousSibling.textContent;
                                    event.target.previousSibling.textContent = el - 0 + 1 
                                    setIndexP(event.target.getAttribute("index"))
                                 }}>+</button> 
                              </div>
                              <p ref={price} className="foodPrice col">{e.price}.000</p>
                              <button dataid={e.id} className="close btn-delete" onClick={(event) => {
                                 const leftItems = cameData.filter(e => event.target.getAttribute('dataid') !== e.id)
                                 setCameData(leftItems)
                                 localStorage.setItem('chosen', JSON.stringify(leftItems))

                              }}>&#10005;</button>
                           </li>

                        ))}
                     </ul>
                     <button className="back-to-shop" onClick={()=> {history.push("/")}}>Continue shopping</button>
               </div>
               <div className="col-md-4 summary checkout">
                     <div>
                        <h5><b>Summary</b></h5>
                     </div>
                     <hr/>
                     <div className="row">
                        <div className="col" style={{paddingLeft:'15px'}}>product {cameData && cameData.length}</div>
                        <div className="col text-right">{total} 000 so'm</div>
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
                     <button className="btn-check btn" onClick={() => {localStorage.setItem('total', total); history.push('/make_order')}}>Continue</button>
               </div>
            </div>
         </div>

      </>
   )}

export default CartComp