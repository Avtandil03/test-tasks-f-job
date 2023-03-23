import React from 'react';
import './MyInput.styles.css';

const MyInput = ({ placeholder, value, onChange, onKeyDown }) => {
  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      onKeyDown()
    }
  }
  return (
    <div className="input-container" onKeyDown={handleKeyDown}>
      <input 
        className="input" 
        type="text" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default MyInput;
