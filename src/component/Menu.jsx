import React ,{useState,useEffect}from 'react'
import {dish} from '../menu';
const Menu = ({cart,onUpdate}) => {
 
    useEffect(()=>{
        const savedCart=JSON.parse(localStorage.getItem('cart'))||[];
        onUpdate(savedCart);
    },[]);
    
    const addToCart=(item)=>{
      const updateCart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingind=updateCart.findIndex((storedItem)=>storedItem.id===item.id);
        // If the item is present, update its quantity
      if(existingind!==-1){
        updateCart[existingind].quantity+=1;
      }else{
        item.quantity=1;
        updateCart.push(item);
      }
      
      localStorage.setItem('cart',JSON.stringify(updateCart));
      onUpdate(updateCart);
    };
    
  return (
    <div>
      <section className='menu' id='menu'>
        <h1 className="heading">
            Our <span> Menu</span>
        </h1>

        <div className="box-container">
            {dish.map((item,index)=>(
                    <div className="box">
                        <img className='menuimg' src={item.image} alt="" />
                        <h3>{item.name}</h3>
                        <div className="price">
                            Rs.  {item.price} <span>  {item.price*1.5}</span>                        </div>
                        <a onClick={()=>addToCart(item)} className='btn'>Add to cart</a>
                    </div>
            ))
            }
        </div>

      </section>
    </div>
  )
}

export default Menu
