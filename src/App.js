import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Reccomendations from "./components/Reccomendations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import personalData from "./personalData";
import recData from "./recData";
import projectData from "./projectData";
import resumeData from "./resumeData";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header personalData={personalData} />
        <About personalData={personalData} />
        <Resume resumeData={resumeData} />
        <Projects projectData={projectData} />
        <Reccomendations recData={recData} />
        <Contact personalData={personalData} />
        <Footer personalData={personalData} />
      </div>
    );
  }
}

export default App;
