import React from 'react';
import { useContent } from '../context/ContentContext';
import { getContentData } from '../data/contentData';
import { Clock, BookOpen, Target, CheckCircle } from 'lucide-react';

interface ContentRendererProps {
  darkMode: boolean;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ darkMode }) => {
  const { activeUnit, activeSection } = useContent();
  const content = getContentData(activeUnit, activeSection);

  if (!content) {
    return (
      <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <p>Content not found</p>
      </div>
    );
  }

  return (
    <div className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <span className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            {activeUnit.toUpperCase()}
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {content.title}
        </h1>
        {content.description && (
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            {content.description}
          </p>
        )}
        
        {/* Meta Info */}
        <div className="flex items-center space-x-6 mt-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>15-20 min read</span>
          </div>
          <div className="flex items-center space-x-2">
            <Target className="w-4 h-4" />
            <span>Beginner to Advanced</span>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {content.sections?.map((section, index) => (
          <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>{section.title}</span>
            </h2>
            <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed space-y-4`}>
              {section.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {section.keyPoints && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3">Key Points:</h3>
                <ul className="space-y-2">
                  {section.keyPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {section.example && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3">Example:</h3>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border-l-4 border-blue-500`}>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} font-mono text-sm`}>
                    {section.example}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Important Notes */}
      {content.importantNotes && (
        <div className={`mt-8 p-6 rounded-xl ${darkMode ? 'bg-yellow-900/20 border-yellow-600' : 'bg-yellow-50 border-yellow-300'} border-l-4`}>
          <h3 className="text-lg font-semibold mb-3 text-yellow-600">Important Notes:</h3>
          <ul className="space-y-2">
            {content.importantNotes.map((note, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                <span className={`text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-800'}`}>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContentRenderer;