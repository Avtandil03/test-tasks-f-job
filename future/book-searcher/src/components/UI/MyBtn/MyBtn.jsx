import React from 'react';

import './MyBtn.styles.css'

const MyBtn = ({onClick, content}) => {
  return (
    <div className="my-btn-container">
      <button className="my-btn" onClick={onClick}>
      {content}
      </button>
    </div>
  );
};

export default MyBtn;