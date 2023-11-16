import React from 'react'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <h1 className="heading">
            Contact <span>Us</span>
        </h1>

        <div className="row">
        <iframe src="https://www.google.com/maps/d/embed?mid=1Dn05jKVkkFO-1pMcELzTKW1hPWU&hl=en&ehbc=2E312F" width="40%" allowFullScreen="" loading='lazy'></iframe>
        <form action="">
            <h1 className='heading'>GET IN TOUCH</h1>
            <div className="inputBox">
                <span className='fas fa-user'></span>
                <input type="text" placeholder='Name' />
            </div>
            <div className="inputBox">
                <span className='fas fa-envelope'></span>
                <input type="email" placeholder='Email' />
            </div>
            <div className="inputBox">
                <span className='fas fa-phone'></span>
                <input type="number" placeholder='Phone Number' />
            </div>
            <input type="submit" className='btn' value="Contact Now" />
        </form>
        </div>

    </section>
  )
}

export default Contact
