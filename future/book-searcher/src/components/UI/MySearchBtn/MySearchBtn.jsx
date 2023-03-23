import React from 'react';
import './MySearchBtn.styles.css';

const MySearchBtn = ({ onClick }) => {
  return (
    <div className="btn-container">
      <button className="btn" onClick={onClick}>
      &#128269;
      </button>
    </div>
  );
};

export default MySearchBtn;
