import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { ContentProvider } from './context/ContentContext';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ContentProvider>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark bg-gray-900' : 'bg-gray-50'
      }`}>
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          toggleSidebar={toggleSidebar}
        />
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} darkMode={darkMode} />
          <MainContent sidebarOpen={sidebarOpen} darkMode={darkMode} />
        </div>
      </div>
    </ContentProvider>
  );
}

export default App;