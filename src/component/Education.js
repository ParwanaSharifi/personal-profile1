import React, { useState } from 'react';
import './Education.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaBootstrap } from 'react-icons/fa';
const Education = () => {
  const [education, setEducation] = useState([
    {language: 'PYTHON', start: 'May 2020', end: 'August 2020',Place:'SABZLEARN Acadamy'},
    { language: 'HTML', start: 'May 2022', end: 'August 2022',Place:'CTI School' },
    { language: 'CSS', start: 'April 2022', end: 'November 2022',Place:'CTI School' },
    { language: 'Bootstrap', start: 'March 2022', end: 'July 2022',Place:'CTI School' },
    { language: 'JavaScript', start: 'January 2023', end: 'May 2023',Place:'CTI School' },
    { language: 'React', start: 'May 2023', end: 'Now' ,Place:'CTI School'},
  ]);

  return (
    <div id='education' className='Education'>
      <h1>Education</h1>
     <div className="education-container" > 
      {education.map((item, index) => (
        <div className="education-card" key={index}>
          <div className="education-icon">
            {item.language === 'HTML' && <i><FaHtml5/></i>}
            {item.language === 'PYTHON' && <i><FaPython/></i>}
            {item.language === 'CSS' && <i><FaCss3Alt/></i>}
            {item.language === 'Bootstrap' && <i> <FaBootstrap/></i>}
            {item.language === 'JavaScript' && <i><FaJsSquare/></i>}
            {item.language === 'React' && <i > <FaReact/></i>}
          </div>
          <div className="education-details">
            <h3>{item.language}</h3>
            <p>{`${item.start} - ${item.end}`}</p>
            <h4>{`(${item.Place})`}</h4>
          </div>
        </div>
        
      ))}
      </div>
    </div>
  );
};

export default Education;
