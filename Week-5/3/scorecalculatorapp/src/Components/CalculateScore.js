import React from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = ({ Name, School, Total, goal }) => {
  return (
    <div className="formatstyle">
      <h3>Student Details</h3>
      <div>
        <b>Name:</b> {Name}
      </div>
      <div>
        <b>School:</b> {School}
      </div>
      <div>
        <b>Total:</b> {Total}Marks
      </div>
      <div>
        <b>Score:</b>{Math.round((Total / goal) * 100) / 100}%
      </div>
    </div>
  );
};

export default CalculateScore;
