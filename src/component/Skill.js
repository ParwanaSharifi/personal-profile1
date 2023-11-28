import React, { useState } from 'react';
import './Skill.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaBootstrap } from 'react-icons/fa';
const Skill = () => {
  const [htmlSkill] = useState(90);
  const [cssSkill] = useState(90);
  const [bootstrapSkill] = useState(70);
  const [jsSkill] = useState(60);
  const [reactSkill] = useState(30);
  const [PythonSkill] = useState(25);

  return (
    <div id="skills"className="skill-page">
      <div className="skill">
        <h1>Skills</h1>
        <div className="skill-name"><i><FaHtml5/></i> HTML</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${htmlSkill} %`}}><label>90%</label></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name"><i><FaCss3Alt/></i> CSS</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${cssSkill }%` }}><label>90%</label></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name"><i><FaBootstrap/></i> Bootstrap</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${bootstrapSkill}%` }}><label>70%</label></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name"><i><FaJsSquare/></i> JavaScript</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${jsSkill}%` }}><label>60%</label></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name"><i><FaPython/></i>Python</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${PythonSkill}%` }}><label>30%</label></div>
        </div>
      </div>
      <div className="skill">
        <div className="skill-name"><i><FaReact/></i>React</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${reactSkill}%` }}><label>25%</label></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
