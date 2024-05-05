import React from 'react';

const YourBotArmy = ({ bots }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
    <div className="bot-list">
    {bots.map((bot) => (
      <div key={bot.id} className="bot-card">
        <h3>{bot.name}</h3>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <button onClick={() => onRelease(bot)}>Release</button>
        <button onClick={() => onDischarge(bot)}>Discharge</button>
      </div>
    ))}
  </div>
</div>
);
};

export default YourBotArmy;