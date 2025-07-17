import React, { useState } from 'react';
import './App.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="nav-link mt-10">Home</button>
        <button className="nav-link">About</button>
        <button className="nav-link">Contact</button>
      </div>
    </>
  );
}

export default Sidebar;
