import React from 'react';
import { useHistory } from 'react-router';
import './Product.css';

const Product = (props) => {
    const { name, imageUrl, price, _id, wight } = props.product;

    const history = useHistory();

    const handleClick = id => {
        history.push(`/checkout/${id}`);
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
                    <button className="buyBtn" onClick={() => handleClick(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;