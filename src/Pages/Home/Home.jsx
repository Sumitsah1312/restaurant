import '../../assets/css/style.css';
import '../../App.css';
import { useState } from 'react';

import Navbar from '../../component/Navbar'
import Home from '../../component/Home';
import About from '../../component/About';
import Menu from '../../component/Menu';
import Product from'../../component/Product'
import Review from '../../component/Review';
import Contact from '../../component/Contact';
import Blog from '../../component/Blog';
import Footer from '../../component/Footer';

function App() {
  const [cart,setCart]=useState([]);
  const updateCart = (newValue) => {
    setCart(newValue);
  };
  return (
    <>
      <Navbar cart={cart} onUpdate={updateCart}/>
      <Home/>
      <About/>
      <Menu cart={cart} onUpdate={updateCart}/>
      <Product/>
     
      <Review/>
      <Contact/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
