import React from 'react';
import { useHistory } from 'react-router';
import './Product.css';

const Product = (props) => {
    let { name, imageUrl, price, _id, wight,quantity } = props.product;

    const history = useHistory();
    
    const buyProduct = id => {
        history.push(`/checkout/${id}`);
        
        quantity = quantity + 1;
        const product = {id, price, name, imageUrl, wight, quantity};
        
        fetch(`http://localhost:5000/update/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => console.log('updated'))
    }
    return (
        <div className="productContainer">
            <div className="productImg">
                <img alt="product" src={imageUrl} />
            </div>
            <div className="productDetail">
                {
                    name ? <h3>{name} {wight}</h3> : <h3>Product</h3>
                }
                <div className="priceAndBuy">
                    {
                        price ? <h2>${price}</h2> : <h2>$230</h2>
                    }
                    <button className="buyBtn" onClick={() => buyProduct(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;