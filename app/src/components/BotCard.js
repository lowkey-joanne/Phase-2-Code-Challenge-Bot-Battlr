import React from 'react';

const BotCard = ({ bot, onEnlist, onRelease }) => {
  return (
    <li key={bot.id}>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
      <button onClick={() => onRelease(bot)}>Release</button>
      <span>{bot.name}</span>
      <button onClick={() => console.log('Delete bot')}>x</button>
    </li>
  );
};

export default BotCard;