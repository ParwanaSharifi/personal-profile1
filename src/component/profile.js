import React, { useState } from "react";
import "./profile.css";

const About = () => {
  //milestons
  const [milestones] = useState([
    {
      id: 1,
      title: "Started Full Stack Development",
      date: "January 2022",
      description:
        "Started full stack development with a focus on React and JavaScript.",
    },
    {
      id: 2,
      title: "Built First Full Stack Application",
      date: "April 2020",
      description:
        "Built my first full stack application using React,JavaScript,and Css.",
    },
  ]);
//achievement
  const [achievements] = useState([
    {
      id: 1,
      title: "React Certification",
      date: "June 2023",
      description:
        "Received a certification in React from an online course.",
    },
    {
      id: 2,
      title: "JS Certification",
      date: "July 2022",
      description:
        "Received a certification in JavaScript from an online course.",
    },
  ]);

  return (
    <div id="about" className="about-container">
      <h1>About Me</h1>
      <div className="timeline-container">
        <h2>Milestones</h2>
        {milestones.map((milestone) => (
          <div className="card" key={milestone.id}>
            <h3>{milestone.title}</h3>
            <p>{milestone.date}</p>
            <p>{milestone.description}</p>
          </div>
        ))}
      </div>
      <div className="achievements-container">
        <h2>Certificates</h2>
        {achievements.map((achievement) => (
          <div className="card" key={achievement.id}>
            <h3>{achievement.title}</h3>
            <p>{achievement.date}</p>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
