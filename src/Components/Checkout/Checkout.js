import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import './Checkout.css';


const Checkout = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setSelectedProduct(data))
    }, [id])


    const handleCheckout = () => {
        alert("Your Checkout has been successfully added!");
    }

    return (
        <div>
            <Header />
            <div className="checkout">
                <h1>Checkout</h1>
                <div className="container">
                    <div className="checkoutTitles">
                        <h4 className="description">Description</h4>
                        <h4>Quantity</h4>
                        <h4>Price</h4>
                    </div>
                    <div className="checkoutData">
                        <h3 className="description">{selectedProduct.name} {selectedProduct.wight}</h3>
                        <h3>1</h3>
                        <h3>${selectedProduct.price}</h3>
                    </div>
                    <hr />
                    <div className="total">
                        <h2>Total</h2>
                        <h2>${selectedProduct.price}</h2>
                    </div>
                </div>
                <button onClick={handleCheckout} className="checkoutBtn">Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;