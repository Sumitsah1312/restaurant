import React from 'react'
import {blog} from '../Data'
const Blog = () => {
  return (
    <section className='blogs' id='blogs'>
        <h1 className="heading">
            Our <span>Blogs</span>
        </h1>
        <div className="box-container">
            {
                blog.map((item,index)=>(
                    <div className="box" key={index}>
                        <div className="image">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="content">
                            <a href={item.link} target='_blank' className='title'>{item.title}</a>
                            <span>by admin / 21st june, 2023</span>
                            <p>{item.feed}</p>
                            <a href={item.link} target='_blank' className='btn'>Read More</a>
                        </div>
                    </div>
                ))
            }
        </div>
      
    </section>
  )
}

export default Blog
