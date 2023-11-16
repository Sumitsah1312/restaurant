import React ,{useRef} from 'react'
import Logo from '../assets/images/logo.png'
import {cart} from '../Data'
const Navbar = () => {
    const cartRef=useRef();
    const navbarRef=useRef();
    const searchRef=useRef();
    const searchHandler=()=>{
        searchRef.current.classList.toggle("active")
        cartRef.current.classList.remove('active');
        navbarRef.current.classList.remove('active');
    }
    const cartContainer=()=>{
        cartRef.current.classList.toggle('active');
        navbarRef.current.classList.remove('active');
        searchRef.current.classList.remove("active")
    }
    const navbarHandler=()=>{
        navbarRef.current.classList.toggle('active');
        searchRef.current.classList.remove("active")
        cartRef.current.classList.remove('active');
    }
  return  <>
        <header className='header'>
            <a href="#" className='logo'>
               <img src={Logo} alt="" /> 
            </a>
            <nav className='navbar' ref={navbarRef}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#products">Products</a>
                <a href="#review">Review</a>
                <a href="#contacts">Contacts</a>
                <a href="#blogs">Blogs</a>
                
            </nav>
            <div className='icons'>
                <div className='fas fa-search' onClick={searchHandler}></div>
                <div className='fas fa-shopping-cart' onClick={cartContainer}></div>
                <div className='fas fa-bars' id='menu-btn' onClick={navbarHandler}></div>
            </div>
            <div className='search-form'ref={searchRef}>
                <input type="search" placeholder='Search' id='search-box'/>
                <label htmlFor="search-box" className='fas fa-search'></label>
            </div>
            

            <div className='cart-items-container' ref={cartRef}>
            {
                cart.map((item,index)=>(
                <div className='cart-item'key={index}>
                    <img src={item.img} alt="" />
                    <div className="content">
                        <h3>Cart Item 0{1+index}</h3>
                        <div className='price'> Rs {15.99*index+12.36} </div>
                    </div>
                    <span className='fas fa-times'></span>
                </div>   
                ))
            }
            <a href="#" className='btn'>CheckOut Now </a>
            </div>

        </header>
    </>
  
}

export default Navbar
