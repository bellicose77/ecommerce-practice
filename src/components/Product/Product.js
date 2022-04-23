import React from 'react';

const Product = ({product}) => {
    const {img,name,price,stock}=product;
    return (
        <div>
            <img src={img}/>
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>{stock}</p>
        </div>
        </div>
    );
};

export default Product;