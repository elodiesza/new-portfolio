import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBack = ({ color }) => {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  return (
      <button 
        className="go-back" 
        onClick={goBack}
        style={{ backgroundColor: color }}
      >
        ←
      </button>
  );
};

export default GoBack;