import React from 'react';

const IndianPlayers = () => {
  const IndianTeam = ["Sachin Tendulkar", "MS Dhoni", "Virat Kohli", "Rohit Sharma", "Yuvraj Singh", "Suresh Raina"];
  
  const [odd1, even1, odd2, even2, odd3, even3] = IndianTeam;

  const T20Players = ["Hardik Pandya", "Rishabh Pant", "Suryakumar Yadav"];
  const RanjiTrophyPlayers = ["Sarfaraz Khan", "Abhimanyu Easwaran", "Priyank Panchal"];

  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h1>Odd Players</h1>
      <ul>
        <li>First : {odd1}</li>
        <li>Third : {odd2}</li>
        <li>Fifth : {odd3}</li>
      </ul>
      
      <hr />
      
      <h1>Even Players</h1>
      <ul>
        <li>Second : {even1}</li>
        <li>Fourth : {even2}</li>
        <li>Sixth : {even3}</li>
      </ul>

      <hr />

      <h1>List of Indian Players Merged:</h1>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
