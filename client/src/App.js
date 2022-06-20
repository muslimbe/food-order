import './App.css';
import { Switch, Route } from 'react-router-dom';

// pages
import { Home } from './pages/home/home.jsx';
import Restaurants from './pages/restaurant/restaurant';
import Cart from './pages/cart/cart.jsx'
import Admin from './pages/admin/admin.jsx'
import Order from './pages/order/order.jsx'



function App() {
  return (
    <>
      <Switch>
        <Route path={"/"} component={Home} exact/>
        <Route path={"/restaurants"} component={Restaurants}/>
        <Route path={"/cart"} component={Cart}/>
        <Route path={"/make_order"} component={Order}/>
        <Route path={"/admin"} component={Admin}/>
      </Switch>
    </>
  )
}

export default App;
