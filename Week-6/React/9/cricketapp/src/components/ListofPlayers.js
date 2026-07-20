import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Sachin Tendulkar', score: 120 },
    { name: 'Virat Kohli', score: 105 },
    { name: 'MS Dhoni', score: 65 },
    { name: 'Rohit Sharma', score: 90 },
    { name: 'KL Rahul', score: 55 },
    { name: 'Shikhar Dhawan', score: 80 },
    { name: 'Hardik Pandya', score: 45 },
    { name: 'Ravindra Jadeja', score: 60 },
    { name: 'Jasprit Bumrah', score: 15 },
    { name: 'Mohammed Shami', score: 25 },
    { name: 'Yuzvendra Chahal', score: 5 },
  ];

  const playersBelow70 = players.filter((player) => player.score < 70);

  return (
    <div>
      <h1>List of Players</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            Mr. {player.name} {player.score}
          </li>
        ))}
      </ul>
      
      <hr />

      <h1>List of Players having Scores Less than 70</h1>
      <ul>
        {playersBelow70.map((player, index) => (
          <li key={index}>
            Mr. {player.name} {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
