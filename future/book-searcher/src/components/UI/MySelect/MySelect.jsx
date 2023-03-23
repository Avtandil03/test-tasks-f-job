import React from 'react';

import './MySelect.styles.css'

const MySelect = ({ select, onChange }) => {


  return (
    <select className="my-select" onChange={onChange}>
      {select.options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default MySelect;

