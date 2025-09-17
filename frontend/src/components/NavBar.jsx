import React from 'react';

const NavBar = ({ decades, onSelectDecade, selectedDecade }) => {
  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'center' }}>
      {decades.map((decade) => (
        <button
          key={decade}
          onClick={() => onSelectDecade(decade)}
          style={{ fontWeight: selectedDecade === decade ? 'bold' : 'normal' }}
        >
          {decade}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
