import React from 'react'
import './project.css'
import fitness1 from '../Items/fitness1.png'
import fitness2 from '../Items/fitness2.png'
import fitness3 from '../Items/fitness3.png'
import fitness4 from '../Items/fitness4.png'
import fitness5 from '../Items/fitness5.png'
import fitness6 from '../Items/fitness6.png'
import fitness7 from '../Items/fitness7.png'
import fitness8 from '../Items/fitness8.png'
import fitness9 from '../Items/fitness8.png'
import fitness10 from '../Items/fitness10.png'
import freshly1 from '../Items/freshly1.png'
import freshly2 from '../Items/freshly2.png'
import freshly3 from '../Items/freshly3.png'
import freshly4 from '../Items/freshly4.png'
import freshly5 from '../Items/freshly5.png'
const project = () => {
  return (
    <section id='project'>
      <h2 id="projectHeading">Projects</h2>
      <div className="container project_container">
        {/* <article className='project_item'>
          <div className="project_item-image">
            <img src="" alt="" />              
          </div>
          <h3>Freshly Clone</h3>
         <div className="project_item-button">
         <a href="https://github.com/SanjanaSinghh/Freshly-Masai-Project" className='btn'>Github </a>
          <a href="/" className='btn'>Live </a>
         </div>
        </article> */}

        {/* fitness pal */}
        <article className='project_item'>
          <div className="project_item-image">
            <img src={fitness1} alt="fitness" />              
            {/* <img src={freshly2} alt="freshly" />              
            <img src={freshly3} alt="freshly" />              
            <img src={freshly4} alt="freshly" />              
            <img src={freshly5} alt="freshly" />               */}
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
            {/* <img src={fitness2} alt="img" />             
            <img src={fitness3} alt="img" />             
            <img src={fitness4} alt="img" />             
            <img src={fitness5} alt="img" />             
            <img src={fitness6} alt="img" />             
            <img src={fitness7} alt="img" />             
            <img src={fitness8} alt="img" />             
            <img src={fitness9} alt="img" />             
            <img src={fitness10} alt="img" />              */}
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
          <a href="https://stellular-melba-86d9a9.netlify.app/" className='btn' target="_blank">Live</a>
         </div>
         </div>
        </article>
      </div>
    </section>
  )
}

export default project
