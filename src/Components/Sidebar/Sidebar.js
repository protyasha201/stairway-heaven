import React from 'react';
import './Sidebar.css';
import { faCube, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div className="sideBar">
                <h2>STAIRWAY HEAVEN</h2>
                <Link to="/admin/manageProduct"><FontAwesomeIcon className="adminIcons" icon={faCube} />Manage Product</Link>
                <Link to="/admin/addProduct"><FontAwesomeIcon className="adminIcons" icon={faPlus} />Add Product</Link>
                <Link to="/admin/editProduct"><FontAwesomeIcon className="adminIcons" icon={faPen} />Edit Product</Link>
            </div>
        </div>
    );
};

export default Sidebar;