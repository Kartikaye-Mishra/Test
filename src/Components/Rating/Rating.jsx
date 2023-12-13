import './rating.css'
import React, { useState } from 'react';

const Rating = ({ value, onChange }) => {
  const [hoverValue, setHoverValue] = useState(value);
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= hoverValue) {
      stars.push(
        <span key={i} onMouseEnter={() => setHoverValue(i)}>
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} onMouseEnter={() => setHoverValue(i)}>
          ☆
        </span>
      );
    }
  }
  return (
    <div
      className="rating"
      onClick={() => onChange(hoverValue)}
      onMouseLeave={() => setHoverValue(value)}
    >
      {stars}
    </div>
  );
};

export default Rating;
