import React, { useState } from 'react';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([])
    return (
        <div className='shop'>
           <div className='products-container'>
               <h2>This is a shop</h2>
           </div> 
            <div className='cart-container'>
                <h2>Shopping Cart</h2>
            </div> 
        </div>
    );
};

export default Shop;