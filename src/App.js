import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import Checkout from './Components/Checkout/Checkout';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
import Deals from './Components/Deals/Deals';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';

export const UserContext = createContext([]);

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false,
    name: '',
    email: '',
    photoURL: ''
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

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
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <Route path="/deals">
            <Deals />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
