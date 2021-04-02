import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './ManageProduct.css';
const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const deleteProduct = id => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully')
            })
    }
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
                {
                    products.map(product =>
                        <div key={product._id} className="allProducts">
                            <h3 className="name">{product.name}</h3>
                            <h3>{product.wight || 1}</h3>
                            <h3>${product.price}</h3>
                            <h3 className="icon"><FontAwesomeIcon style={{ color: 'coral' }} icon={faEdit} /> <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteProduct(product._id)} className="deleteIcon" /> </h3>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageProduct;