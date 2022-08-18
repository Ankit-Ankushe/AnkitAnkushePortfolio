import React from "react";
import Header from "./components/header/Header"
import Nav from "./components/nav/navbar"
import About from "./components/about/about"
import Footer from "./components/footer/footer"
import Contact from "./components/contact/contact"
import Project from './components/project/project'
import Skill from "./components/skill/Skill";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <Skill></Skill>
      <Project></Project>
       <Contact></Contact>
       <br />
       <br />
       
      {/* <Footer></Footer> */}
      
    </div>
  );
}

export default App;
