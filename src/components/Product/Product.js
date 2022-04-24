import React from 'react';

const Product = ({product,handleButton}) => {
    const {img,name,price,stock}=product;
    return (
        <div>
            <img src={img}/>
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{stock}</p>
        </div>
        <button onClick={handleButton}>Add to Cart</button>
        </div>
    );
};

export default Product;