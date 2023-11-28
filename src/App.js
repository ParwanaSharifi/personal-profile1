import About from './component/profile';
import Skill from './component/Skill';
import NavigationBar from './component/NavigationBar';
import Home from "./component/Homepage.js";
import Education from './component/Education';
import ProjectComponent from './component/ProjectComponent';
import Contact from './component/Contact';
import './component/Footer.css';
import React, { useState, useEffect } from 'react';


function App() {
 //switch theme
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  return (
    <div className={`footer ${theme}`}>
      <NavigationBar></NavigationBar>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Skill></Skill>
      <Contact></Contact>
      <ProjectComponent></ProjectComponent> 
    <button onClick={handleThemeChange}>Switch Theme🔄</button>
    </div>

);
}

export default App;


