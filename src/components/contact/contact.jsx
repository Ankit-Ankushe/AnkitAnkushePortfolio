import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {SiTwitter} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
const contact = () => {
  return (
    <footer>
      <section id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_icon'/>
            <h4>Email</h4>
            <h5>ankitankushe@gmail.com</h5>
            <a href="mailto:ankitankushe@gmail.com"  target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='contact_icon'/>
            <h4>Linkedin</h4>
            <h5>Ankit Ankushe</h5>
            <a href="https://www.linkedin.com/in/ankit-ankushe/" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <SiTwitter className='contact_icon'/>
            <h4>Twitter</h4>
            <h5>@AnkitAnkushe</h5>
            <a href="https://twitter.com/AnkitAnkushe" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_icon'/>
            <h4>Whatapp</h4>
            <h5>+91 7822832282</h5>
            <a href="http://wa.me/917822832282" target="_blank">Send a message</a>
          </article>
        </div>
        {/* form input message */}
        {/* <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> */}
      </div>
    </section>
    </footer>
  )
}

export default contact
