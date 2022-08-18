import React from "react";
import Header from "./components/header/Header"
import Nav from "./components/nav/navbar"
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"
import Project from './components/project/project'
import Skill from "./components/skill/Skill";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <br />
      <Header></Header>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
