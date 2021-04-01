import './App.css';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import Checkout from './Components/Checkout/Checkout';
import Orders from './Components/Orders/Orders';
import Deals from './Components/Deals/Deals';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/manageProduct">
          <ManageProduct />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout/:id">
            <Checkout />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
