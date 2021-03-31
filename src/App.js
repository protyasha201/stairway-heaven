import './App.css';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import ManageProduct from './Components/ManageProduct/ManageProduct';
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
          <Route path="/manageProduct">
          <ManageProduct />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
