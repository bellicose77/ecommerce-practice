import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.JSON')
        .then(res =>res.json())
        .then(data=>setProducts(data))
    },[]);
    const addToCart=addToDb()
    const handleButton = (product) =>{
        const newCart=[...cart,product];
        setCart(newCart);
    }
    // console.log(products)
    return (
        <div className='shop'>
           <div className='products-container'>
               <h2>Total Products:{products.length}</h2>
               {
                   products.map(product=><Product handleButton={handleButton} product={product}></Product>)
               }
           </div> 
            <div className='cart-container'>
                <Cart cart={cart}/>
            </div> 
        </div>
    );
};

export default Shop;