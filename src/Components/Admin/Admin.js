
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import EditProduct from '../EditProduct/EditProduct';
import '../ManageProduct/ManageProduct';
import Sidebar from '../Sidebar/Sidebar';
import './Admin.css';

const Admin = () => {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path="/admin/addProduct">
                    <AddProduct/>
                </Route>
                <Route path="/admin/manageProduct">
                    <ManageProduct/>
                </Route>
                <Route path="/admin/editProduct">
                    <EditProduct/>
                </Route>
            </Switch>
        </Router>
    );
};

export default Admin;