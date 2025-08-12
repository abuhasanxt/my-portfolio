import React from "react";
import Banner from "../../Components/Banner";
import About from "../../Components/About";
import Skills from "../../Components/Skills";
import Project from "../../Components/Project";
import Contact from "../../Components/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
};

export default Home;
