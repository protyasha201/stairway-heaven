import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Orders = () => {
    const [orderedProducts, setOrderedProducts] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrderedProducts(data))
    },[loggedInUser.email])
    return (
        <div>
            <Header />
            <div>
                <h1>ALL ORDERS</h1>
                <div>
                    {
                        orderedProducts.map(order =>
                            <div key={order._id}>
                                <h1>{order.name}</h1>
                                <h1>{order.orderPlaced}</h1>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Orders;