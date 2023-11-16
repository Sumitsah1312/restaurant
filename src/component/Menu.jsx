import React from 'react'
import {menu} from '../Data';
const Menu = () => {
  return (
    <div>
      <section className='menu' id='menu'>
        <h1 className="heading">
            Our <span> Menu</span>
        </h1>

        <div className="box-container">
            {menu.map((item,index)=>(
                    <div className="box">
                        <img src={item.img} alt="" />
                        <h3>{item.name}</h3>
                        <div className="price">
                            Rs.  {item.cost-index*6} <span>  {item.cost}</span>
                        </div>
                        <a href="#" className='btn'>Add to cart</a>
                    </div>
            ))
            }
        </div>

      </section>
    </div>
  )
}

export default Menu
