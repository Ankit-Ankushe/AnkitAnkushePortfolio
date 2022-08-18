import React from 'react'
import './project.css'
import asos from '../Items/Asos.png'
import fitness1 from '../Items/fitness1.png'
import freshly1 from '../Items/freshly1.png'

const project = () => {
  return (
    <section id='project'>
      <h2 id="projectHeading">Projects</h2>
      <div className="container project_container">

        {/* Asos */}
        <article className='project_item'>
          <div className="project_item-image">
            <img src={asos} alt="" />              
          </div>
          <div>
          <h2>Asos Clone</h2>
          <h3>About</h3>
         <li>-This is a E-commerce Website of different kind of men and women Clothes.</li>
          <li>-Collaborative Project with the team size of four members in the duration of one week.</li>
          <h3>My Part</h3>
          <li>-Worked on Home Page</li>
          <li>-Worked on Product Listing page</li>
         <div className="project_item-button">
         <a href="https://github.com/OfficialSiddharthBisht/asos-clone-react-js" className='btn'>Github </a>
          <a href="https://asosclonebysrinuteam.netlify.app/" className='btn'>Live </a>
         </div>
          </div>
        </article>

        {/* fitness pal */}
        <article className='project_item'>
          <div className="project_item-image">
            <img src={fitness1} alt="fitness" />              
          </div>
          <div>
          <h2>MyFitnessPal Clone</h2>
          <h3>About</h3>
         <li>-It is a Fitness App</li>
          <li>-Keeps check on your daily fitness routine</li>
          <h3>My Part</h3>
          <li>-Worked on Exercise page</li>
          <li>-Worked on Home page</li>
          <div className="project_item-button">
         <a href="https://github.com/AnkitAnkushe/myFitnessPal-Clone" className='btn' target="_blank">Github </a>
          <a href="https://lifestylepalteam.netlify.app/" className='btn' target="_blank">Live </a>
         </div>
          </div>
        </article>

        {/* freshly*/}
        <article className='project_item'>
          <div className="project_item-image">
            <img src={freshly1} alt="img" />             
          </div>
         <div>
         <h2>Freshly Clone</h2>
         <h3>About</h3>
         <li>-It is a Food delivery app</li>
          <li>-Has vast variety of foods</li>
          <h3>My Part</h3>
          <li>-Worked on Menu page</li>
          <li>-Worked on Cart page</li>
          <div className="project_item-button">
         <a href="https://github.com/SanjanaSinghh/Freshly-Masai-Project" className='btn' target="_blank">Github </a>
          <a href="https://warishalam.github.io/Freshly-App/" className='btn' target="_blank">Live</a>
         </div>
         </div>
        </article>
      </div>
    </section>
  )
}

export default project
