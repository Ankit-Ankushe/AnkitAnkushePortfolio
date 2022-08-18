import React from 'react'
import "./about.css"
import ME from '../Items/profilePic.jpg'
const about = () => {
  return (
    <section id='about' >
      <h3>Get To Know</h3>
      <h2 id='aboutHeading'>About Me</h2>
      <div className="about_container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME}  alt="me" />
          </div>
        </div>
        <div className="about__content">
          <h3>An aspiring Full Stack Web Developer with the knowledge of HTML, CSS, JavaScript, React, Redux ,Material-UI etc. Looking forwad to enhance my skills and knowledge as a very good developer.</h3>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about;
