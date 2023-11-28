import React, { useState } from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
   /* search bar */
  const [searchTerm, setSearchTerm] = useState('');
   const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  /* navigation bar */
  const navigationItems = ['Home' , 'About', 'Skills','Education','Experience','Contact'];
  return (
    <nav className="navigation-bar" >
      <div className="navigation-items">
        {navigationItems
          .filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      </div>
    </nav>
  );
};

export default NavigationBar;