import React from 'react'
import "./about.css"
import ME from '../Items/ProfilePic2.jpg'
const about = () => {
  return (
    <section id='about' >
      <h3>Get To Know</h3>
      <h2 id='aboutHeading'>About Me</h2>
      <div className="about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="profilepic2" />
          </div>
        </div>
        <div className="about__content">
          <h3>Building quality websites and
            applications with HTML, CSS, and
            JavaScript. I aim to attain new tech
            knowledge and want to explore
            new upcoming tech skills and
            attain them and make myself
            better to compete in this new tech
            world</h3>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about;
