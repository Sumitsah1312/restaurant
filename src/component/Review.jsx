import React from 'react'
import {review} from '../Data'
import quoteimg from '../assets/images/quote-img.png';
const Review = () => {
  return (
    <section className='review' id='review'>
        <h1 className="heading">
            <span>Customer's </span> Review
        </h1>
      <div className="box-container">
        {
            review.map((item,index)=> (
                <div className="box">
                    <img src={quoteimg} alt="" />
                    <p>
                        {item.txt}
                    </p>
                    <img src={item.img} className='user' alt="" />
                    <h3>{item.name}</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default Review
