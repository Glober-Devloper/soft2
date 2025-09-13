import React from 'react';
import { useContent } from '../context/ContentContext';
import { ChevronRight, BookOpen, FileText, TestTube } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, darkMode }) => {
  const { activeUnit, activeSection, setActiveUnit, setActiveSection } = useContent();

  const units = [
    {
      id: 'unit1',
      title: 'Unit I: Software Engineering Concepts',
      sections: [
        'Introduction to Software Engineering',
        'SDLC Models',
        'Software Project Management'
      ]
    },
    {
      id: 'unit2',
      title: 'Unit II: Requirements Analysis',
      sections: [
        'Software Requirements Specification',
        'Requirement Engineering Process',
        'Function Oriented Modeling'
      ]
    },
    {
      id: 'unit3',
      title: 'Unit III: Software Design',
      sections: [
        'Design Approaches',
        'Cohesion and Coupling',
        'UI Design Process'
      ]
    },
    {
      id: 'unit4',
      title: 'Unit IV: Coding and Testing',
      sections: [
        'Coding Standards',
        'Testing Strategies',
        'Debugging Techniques'
      ]
    },
    {
      id: 'unit5',
      title: 'Unit V: Software Maintenance',
      sections: [
        'Maintenance Characteristics',
        'Reverse Engineering',
        'Cost Estimation'
      ]
    }
  ];

  const handleUnitClick = (unitId: string) => {
    setActiveUnit(unitId);
    setActiveSection('overview');
  };

  const handleSectionClick = (unitId: string, section: string) => {
    setActiveUnit(unitId);
    setActiveSection(section);
  };

  return (
    <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 transform transition-transform duration-300 z-40 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r overflow-y-auto`}>
      <div className="p-4">
        <div className="space-y-2">
          {units.map((unit) => (
            <div key={unit.id} className="space-y-1">
              <button
                onClick={() => handleUnitClick(unit.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                  activeUnit === unit.id
                    ? darkMode 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : darkMode
                      ? 'hover:bg-gray-700 text-gray-300'
                      : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">{unit.title}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transform transition-transform duration-200 ${
                  activeUnit === unit.id ? 'rotate-90' : ''
                }`} />
              </button>
              
              {activeUnit === unit.id && (
                <div className="ml-4 space-y-1">
                  <button
                    onClick={() => handleSectionClick(unit.id, 'overview')}
                    className={`w-full flex items-center p-2 rounded-lg text-sm transition-colors duration-200 ${
                      activeSection === 'overview'
                        ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
                        : darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <FileText className="w-3 h-3 mr-2" />
                    Overview
                  </button>
                  {unit.sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => handleSectionClick(unit.id, section)}
                      className={`w-full flex items-center p-2 rounded-lg text-sm transition-colors duration-200 ${
                        activeSection === section
                          ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
                          : darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <FileText className="w-3 h-3 mr-2" />
                      {section}
                    </button>
                  ))}
                  <button
                    onClick={() => handleSectionClick(unit.id, 'quiz')}
                    className={`w-full flex items-center p-2 rounded-lg text-sm transition-colors duration-200 ${
                      activeSection === 'quiz'
                        ? darkMode ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'
                        : darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <TestTube className="w-3 h-3 mr-2" />
                    Quiz & Practice
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;