import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content ">
        <h1 className='text-5xl mt-40 font-bold mb-5'>Welcome to My Website</h1>
        <p className='text-2xl'>This is the main content of the webpage.</p>
      </div>
    </div>
  );
}

export default App;
