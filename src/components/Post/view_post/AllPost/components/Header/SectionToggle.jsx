import React from 'react';

const SectionToggle = ({ activeSection, onSectionToggle }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'messages', label: 'Messages' }
  ];

  return (
    <div className="section-toggle">
      {sections.map(section => (
        <button
          key={section.id}
          className={`toggle-btn ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => onSectionToggle(section.id)}
        >
          {section.label}
        </button>
      ))}
      <div className={`toggle-indicator ${activeSection}`}></div>
    </div>
  );
};

export default SectionToggle;