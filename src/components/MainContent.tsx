import React from 'react';
import { useContent } from '../context/ContentContext';
import ContentRenderer from './ContentRenderer';
import QuizSection from './QuizSection';

interface MainContentProps {
  sidebarOpen: boolean;
  darkMode: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ sidebarOpen, darkMode }) => {
  const { activeSection } = useContent();

  return (
    <main className={`flex-1 transition-all duration-300 ${
      sidebarOpen ? 'ml-80' : 'ml-0'
    } min-h-[calc(100vh-4rem)]`}>
      <div className="p-6 max-w-4xl mx-auto">
        {activeSection === 'quiz' ? (
          <QuizSection darkMode={darkMode} />
        ) : (
          <ContentRenderer darkMode={darkMode} />
        )}
      </div>
    </main>
  );
};

export default MainContent;