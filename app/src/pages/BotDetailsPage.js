import React from 'react';

const BotDetailsPage = ({ bot, onEnlistClick, onBackClick }) => {
  return (
    <div>
      <h2>Bot Details</h2>
      <h3>{bot.name}</h3>
      <button onClick={onEnlistClick}>Enlist Bot</button>
      <button onClick={onBackClick}>Back to List</button>
    </div>
  );
};

export default BotDetailsPage;

