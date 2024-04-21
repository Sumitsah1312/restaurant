import React ,{useRef,useState,useEffect} from 'react'
import Logo from '../assets/images/logo.png'

const Navbar = ({cart,onUpdate}) => {

    useEffect(()=>{
        // window.addEventListener('beforeunload', ()=>{localStorage.clear();});
        
        const savedCart=JSON.parse(localStorage.getItem('cart'))||[];
        onUpdate(savedCart);
    },[]);

    

    const removeFromCart=(index)=>{
        const updatedCart=[...cart];
        if(updatedCart[index].quantity===1){
        updatedCart.splice(index,1);
       }else{
        updatedCart[index].quantity-=1;
       }

        onUpdate(updatedCart);
        localStorage.setItem('cart',JSON.stringify(updatedCart));
      };

      const msg=()=>{
        const cartData=JSON.parse(localStorage.getItem('cart'))||[];
        const totalPrice=cartData.reduce((sum,item)=>sum+(item.price*item.quantity),0);
        const alertMessage=cartData.map(item=>(`${item.name}    Qty,:${item.quantity}    Price: ${item.price.toFixed(2)}\n`
    )).join('\n');
       
    alert(`ORDER DETAILS\n${alertMessage}\nTotal Price: Rs. ${totalPrice.toFixed(2)}
        `)
      };
    
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
            
                <h1 style={{color:"gold",fontSize:"35px",padding:"2rem",textAlign:"center"}}>Your Order</h1>
                {
                    cart.length===0?(
                        <h3 style={{color:"grey",fontSize:"35px",padding:"2rem",textAlign:"center"}}>Your Cart is Empty</h3>
                    ):(
                        <ul>
                            {
                            cart.map((item,index)=>(
                                <div className='cart-item'key={index}>
                                    <img src={item.image} alt="" />
                                    <div className="content">
                                        <h3>{item.name}</h3>
                                        <div className='price'> Rs {item.price*item.quantity} </div>
                                    </div>
                                    <div style={{ position: 'absolute', top: "4rem", right: 2 }}>
                                        <h2>Quantity  : {item.quantity}</h2>
                                    </div>
                                    <span onClick={()=>removeFromCart(index)} className='fas fa-times'></span>
                                </div>   
                                ))
                            }
                        </ul>
                    )
                
                }


                
            
            <a href='#' onClick={msg} className='btn'>CheckOut Now </a>
            </div>

        </header>
    </>
  
}

export default Navbar
