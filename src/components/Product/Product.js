import React from 'react';

const Product = ({product}) => {
    const {img,name,price,stock}=product;
    return (
        <div>
            <img src={img}/>
        <div>

        </div>
        </div>
    );
};

export default Product;