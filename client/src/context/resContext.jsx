import {createContext, useEffect, useState} from 'react'

const RestaurantContext = createContext()

function RestaurantProvider ({children}) {
   
   const [chosenRes, setChosenRes] = useState([])  
   const chosen = localStorage.getItem("chosen")
   useEffect(() => {
      // setChosenRes(chosen)

   },[chosen])
   return(
      <>

         <RestaurantContext.Provider value={{chosenRes, setChosenRes}}>
            {children}
         </RestaurantContext.Provider>

      </>
   )
}

export {
   RestaurantProvider,
   RestaurantContext
}