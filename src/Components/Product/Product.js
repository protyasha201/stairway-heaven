import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, imageUrl, price } = props.product;
    return (
        <div className="productContainer">
            <div className="productImg">
                <img src={imageUrl} />
            </div>
            <div className="productDetail">
                {
                    name ? <h3>{name}</h3> : <h3>Product</h3>
                }
                <div className="priceAndBuy">
                    {
                        price ? <h2>${price}</h2> : <h2>$230</h2>
                    }
                    <button className="buyBtn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;