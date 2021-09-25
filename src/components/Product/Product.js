import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {name, img,seller, price, stock} = props.product;
    const CartIcon = <FontAwesomeIcon icon={faShoppingCart} />
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
            <button onClick={() =>props.handleAddToCart(props.product)} className="btn-regular">{CartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;