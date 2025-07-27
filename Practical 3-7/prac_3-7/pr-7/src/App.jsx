import Sidebar from './pages/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import React, { useState } from 'react'; 
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'home': 
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about': 
        return <About />;
      case 'contact': 
        return <Contact />;
      default: 
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;