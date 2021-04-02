import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Orders.css';

const Orders = () => {
    const [orderedProducts, setOrderedProducts] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrderedProducts(data))
    }, [loggedInUser.email])

    return (
        <div>
            <Header />
            <div className="orderBox">
                <h1 className="orderTitle">YOUR ORDERS</h1>
                <div className="orders">
                    {
                        orderedProducts.map(order =>
                            <div className="orderContainer" key={order._id}>
                                <img alt={order.name} src={order.imageUrl} />
                                <div>
                                    <h4>{order.name} {order.wight}</h4>
                                    <h5>Order was placed in: {order.orderPlaced}</h5>
                                    <hr/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Orders;