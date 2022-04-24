import React from 'react';

const Cart = ({cart}) => {
    let total = 0;
    for(const product of cart){
        total+=product.price;
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Order items:{cart.length}</p>
            <p>Total:{total} </p>
        </div>
    );
};

export default Cart;