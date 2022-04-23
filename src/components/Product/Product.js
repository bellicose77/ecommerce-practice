import React from 'react';

const Product = (props) => {
    const product = props.products
    return (
        <div>
            {
                product.map(prod => <p>prod</p>)
            }
        </div>
    );
};

export default Product;