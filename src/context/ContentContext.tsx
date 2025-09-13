import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ContentContextType {
  activeUnit: string;
  activeSection: string;
  setActiveUnit: (unit: string) => void;
  setActiveSection: (section: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider: React.FC<ContentProviderProps> = ({ children }) => {
  const [activeUnit, setActiveUnit] = useState('unit1');
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <ContentContext.Provider value={{
      activeUnit,
      activeSection,
      setActiveUnit,
      setActiveSection
    }}>
      {children}
    </ContentContext.Provider>
  );
};