import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {name, img,seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h4 className="product-name">{name}</h4>
            <p>by: {seller} </p>
            <p>Only {stock} left in Stock - Order Soon</p>
            <h3>Price:{price}</h3>
            <button className="btn-regular">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;