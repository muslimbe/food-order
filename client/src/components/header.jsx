import { useHistory } from 'react-router-dom'
import logo from '../images/logo.png'
import yellow from '../images/yellow.png'
import Incart from '../components/incart'

function Header({data}){

   const history = useHistory()

   return(
      <>
      
         <header className='header container-md nav-justified ' id='header'>

            <nav className="navbar navbar-expand-md">
            
            <img className='logo' src={logo} alt="logo" width={100} height={100} />
            <a className="h2 ml-2 mr-5 text-warning" href="#">Restoranlar</a>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                     <p style={{cursor: 'pointer', margin: '0'}} className="nav-link text-info" onClick={() => {history.push('/')}}>Asosiy <span className="sr-only">(current)</span></p>
                  </li>

                  <li className="nav-item">
                     <p style={{cursor: 'pointer', margin: '0'}} className="nav-link text-info" href="#">Contact</p>
                  </li>

                  <li className="nav-item dropdown dropdownToggle">
                     <p style={{cursor: 'pointer', margin: '0'}} className="nav-link text-info" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                           Restoranlar
                     </p>
                  </li>

                  <li className="nav-item">
                     <p style={{cursor: 'pointer', margin: '0'}} className="nav-link text-info" href="#">Cafes</p>
                  </li>
               </ul>
               <form className=" my-2 my-lg-0" style={{display: 'flex', marginRight: '10px'}}>
                  <input className="form-control mr-sm-1" type="search" placeholder="Qidiruv" aria-label="Search"/>
                  <button className="btn-outline-success my-sm-0" type="submit" style={{border: 'solid 1px', borderRadius: '5px'}}>Izlash</button>
               </form>
               <Incart/>
            </div>

            </nav>
            <span className='line'></span>

         </header>
      
      </>
   )
}

export default Header