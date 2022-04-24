import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Order items:{cart.length}</p>
            <p>Total: </p>
        </div>
    );
};

export default Cart;