import { faDumpster, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ManageProduct.css';
const ManageProduct = () => {
    return (
        <div className="manageProductContainer">
            <h2>Manage your products</h2>
            <div className="manageProducts">
                <div className="titles">
                    <h4>Product Name</h4>
                    <h4>Wight</h4>
                    <h4>Price</h4>
                    <h4>Action</h4>
                </div>
                <div className="allProducts">
                    <h3>Moushum Bay Leaves</h3>
                    <h3>200gm</h3>
                    <h3>$234</h3>
                    <h3 className="icon"><FontAwesomeIcon style={{color: 'coral'}} icon={faEdit} /> <FontAwesomeIcon icon={faDumpster} /> </h3>
                </div>
                <div className="allProducts">
                    <h3>Moushum Bay Leaves</h3>
                    <h3>200gm</h3>
                    <h3>$234</h3>
                    <h3 className="icon"><FontAwesomeIcon style={{color: 'coral'}} icon={faEdit} /> <FontAwesomeIcon icon={faDumpster} /> </h3>
                </div>
                <div className="allProducts">
                    <h3>Moushum Bay Leaves</h3>
                    <h3>200gm</h3>
                    <h3>$234</h3>
                    <h3 className="icon"><FontAwesomeIcon style={{color: 'coral'}} icon={faEdit} /> <FontAwesomeIcon icon={faDumpster} /> </h3>
                </div>
                <div className="allProducts">
                    <h3>Moushum Bay Leaves</h3>
                    <h3>200gm</h3>
                    <h3>$234</h3>
                    <h3 className="icon"><FontAwesomeIcon style={{color: 'coral'}} icon={faEdit} /> <FontAwesomeIcon icon={faDumpster} /> </h3>
                </div>
                <div className="allProducts">
                    <h3>Moushum Bay Leaves</h3>
                    <h3>200gm</h3>
                    <h3>$234</h3>
                    <h3 className="icon"><FontAwesomeIcon style={{color: 'coral'}} icon={faEdit} /> <FontAwesomeIcon icon={faDumpster} /> </h3>
                </div>
                <div className="allProducts">
                    <h3>Moushum Bay Leaves</h3>
                    <h3>200gm</h3>
                    <h3>$234</h3>
                    <h3 className="icon"><FontAwesomeIcon style={{color: 'coral'}} icon={faEdit} /> <FontAwesomeIcon icon={faDumpster} /> </h3>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;