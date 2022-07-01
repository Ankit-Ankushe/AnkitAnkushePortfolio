import React from 'react'
import './Skill.css'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { SiMaterialui } from 'react-icons/si'
// import {SiChakraui} from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { SiMongodb } from 'react-icons/si'

const Skill = () => {
  return (
    <section id='skill'>
      <h5 id="skillHeading">Skills</h5>
      <div className="container skill_Container">
        <div className="skill_frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className='skill_detail'>
              <SiHtml5 className="skill_icon"/>
              <h4>HTML</h4>
            </article>
            <article className='skill_detail'>
              <SiCss3 className="skill_icon"/>
              <h4>CSS</h4>
            </article>
            <article className='skill_detail'>
              <SiJavascript className="skill_icon"/>
              <h4>JAVASCRIPT</h4>
            </article>
            <article className='skill_detail'>
              <SiReact className="skill_icon"/>
              <h4>React</h4>
            </article>
            <article className='skill_detail'>
              <SiRedux className="skill_icon"/>
              <h4>Redux</h4>
            </article>
            <article className='skill_detail'>
              <SiMaterialui className="skill_icon"/>
              <h4>Material-UI</h4>
            </article>
          </div>
        </div>
        <div className="skill_backend">
        <h3>Backend Development</h3>
          <div className="skill_content">
            <article className='skill_detail'>
              <SiNodedotjs className="skill_icon"/>
              <h4>Node.js</h4>
            </article>
            <article className='skill_detail'>
              <GrMysql className="skill_icon"/>
              <h4>SQL</h4>
            </article>
            <article className='skill_detail'>
              <SiMongodb className="skill_icon"/>
              <h4>MongoDB</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
