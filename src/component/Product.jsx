import React from 'react'
import {product} from '../Data'
const Product = () => {
  return (
    <section className='products' id='products'>
        <h1 className='heading'>
            My <span>Products</span>
        </h1>

        <div className="box-container">
            {
                product.map((item,index)=>(
                    <div className="box">
                        <div className="icons">
                            <a href="#" className='fas fa-shopping-cart'></a>
                            <a href="#" className='fas fa-heart'></a>
                            <a href="#" className='fas fa-eye'></a>
                        </div>
                        <div className='image'>
                            <img src={item.img} alt="" />
                        </div>
                         <div className="content">
                            <div className="stars">
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star-half-alt"/>
                            </div>
                            <h3>{item.name}</h3>
                            <div className="price">
                                Rs.  {item.cost-((index+1)*13)} <span>{item.cost}</span>
                            </div>
                         </div>
                    </div>
                ))
            }
        </div> 
    </section>
  )
}

export default Product
