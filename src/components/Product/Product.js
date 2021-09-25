import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const {name, img,seller, price, stock, star} = props.product;
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
            <Rating 
            initialRating = {star}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            readonly></Rating>
            <br />
            <button onClick={() =>props.handleAddToCart(props.product)} className="btn-regular">{CartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;