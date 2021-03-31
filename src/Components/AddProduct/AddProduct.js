import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: null,
        wight: '',
        imageUrl: ''
    })
    const uploadImage = e => {
        console.log("selected");
        const imageData = new FormData();
        imageData.set('key', '59f16cfa1db6b4682ec0385c0ff25b1d');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                const newProductUpdate = {...newProduct};
                newProductUpdate.imageUrl = response.data.data.display_url
                setNewProduct(newProductUpdate);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const handleBlur = e => {
        if(e.target.name === "name"){
            const newProductUpdate = {...newProduct};
            newProductUpdate.name = e.target.value;
            setNewProduct(newProductUpdate);
        }
        if(e.target.name === "wight"){
            const newProductUpdate = {...newProduct};
            newProductUpdate.wight = e.target.value;
            setNewProduct(newProductUpdate);
        }
        if(e.target.name === "price"){
            const newProductUpdate = {...newProduct};
            newProductUpdate.price = e.target.value;
            setNewProduct(newProductUpdate);
        }

    }
    const addProduct = () => {
        const productData = {
            name: newProduct.name,
            wight: newProduct.wight,
            price: newProduct.price,
            imageUrl: newProduct.imageUrl
        };

        const url = 'http://localhost:5000/addProduct';

        fetch(url,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(productData)
        })
        .then(res =>res.json())
        .then(data => console.log(data))
    }


    return (
        <div className="addProductContainer">
            <h3>Add Product</h3>
            <form className="addForm">
                <div>
                    <h4>Product Name</h4>
                    <input onBlur={handleBlur} name="name" type="text" placeholder="Enter Name" />
                </div>
                <div>
                    <h4>Wight Name</h4>
                    <input onBlur={handleBlur} name="wight" type="text" placeholder="Enter wight" />
                </div>
                <div>
                    <h4>Add Price</h4>
                    <input onBlur={handleBlur} name="price" type="text" placeholder="Enter price" />
                </div>
                <div className="uploadContainer">
                    <h4>Add Photo</h4>
                    <label className="label" htmlFor="files"><FontAwesomeIcon icon={faUpload} />Upload Photo</label>
                    <input onChange={uploadImage} style={{ visibility: 'hidden' }} type="file" id="files" />
                </div>
                <button onClick={addProduct} className="addProductBtn">Save</button>
            </form>
        </div >
    );
};

export default AddProduct;