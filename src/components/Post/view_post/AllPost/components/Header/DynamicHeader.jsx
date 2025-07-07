import React from 'react';
import SectionToggle from './SectionToggle';

const DynamicHeader = ({ isScrolled, activeSection, onSectionToggle }) => {
  return (
    <header className={`dynamic-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <h1 className="header-title">Social Feed</h1>
        <SectionToggle 
          activeSection={activeSection}
          onSectionToggle={onSectionToggle}
        />
      </div>
    </header>
  );
};

export default DynamicHeader;