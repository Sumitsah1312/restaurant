import React,{useRef} from 'react'
import emailjs from '@emailjs/browser'

// npm i '@emailjs/browser'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6idjlqo', 'template_528xf0v', form.current, 'USpX1cfY8kL3P7Ks5')
      .then((result) => {
            console.log(result.text);
            alert("Message Sent");
            window.location.reload();
        }, (error) => { 
            console.log("Problem with Message");
            console.log(error.text);
      });
  };

  return (
    <section className='contact' id='contact'>
        <h1 className="heading">
            Contact <span>Us</span>
        </h1>

        <div className="row">
        <iframe src="https://www.google.com/maps/d/embed?mid=1Dn05jKVkkFO-1pMcELzTKW1hPWU&hl=en&ehbc=2E312F" width="40%" allowFullScreen="" loading='lazy'></iframe>
        <form action="" ref={form} onSubmit={sendEmail}>
            <h1 className='heading'>GET IN TOUCH</h1>
            <div className="inputBox">
                <span className='fas fa-user'></span>
                <input type="text" name='from_name' placeholder='Name' />
            </div>
            <div className="inputBox">
                <span className='fas fa-envelope'></span>
                <input type="email" name='email' placeholder='Email' />
            </div>
            <div className="inputBox">
                <span className='fas fa-phone'></span>
                <input type="number" name='phone_no' placeholder='Phone Number' />
            </div>
            <div className="inputBox">
                <span className='fas fa-envelope'></span>
                <input type="text" name='message' placeholder='Message' />
            </div>
            <input type="submit" className='btn' value="Contact Now" />
        </form>
        </div>

    </section>
  )
}

export default Contact
