import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Home.css';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://young-citadel-50455.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Header />
            <div className="searchBar">
                <input type="text" placeholder="search..."/>
                <button className="searchBtn">Search</button>
            </div>
            <div className="products">
                {
                    products.length === 0 && 
                    <div className="spinner">
                        <CircularProgress />
                    </div>
                }
                {
                    products.map(product => <Product key={product._id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default Home;