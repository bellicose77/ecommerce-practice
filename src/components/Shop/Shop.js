import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.JSON')
        .then(res =>res.json())
        .then(data=>setProducts(data))
    },[]);
    console.log(products)
    return (
        <div className='shop'>
           <div className='products-container'>
               <h2>Total Products:{products.length}</h2>
           </div> 
            <div className='cart-container'>
                <h2>Shopping Cart</h2>
            </div> 
        </div>
    );
};

export default Shop;