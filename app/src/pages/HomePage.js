import React, { useState } from 'react';
import BotCollection from '../components/BotCollection';
import YourBotArmy from '../components/YourBotArmy';
import SortBar from '../components/SortBar';

const HomePage = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  const handleBotClick = (botId) => {
    // Fetch bot details based on botId
    const bot = bots.find(bot => bot.id === botId);
    setSelectedBot(bot);
  };

  const handleEnlistClick = (botId) => {
    // Add bot to army
    const bot = bots.find(bot => bot.id === botId);
    setArmy([...army, bot]);
  };

  const handleReleaseClick = (botId) => {
    // Remove bot from army
    const updatedArmy = army.filter(bot => bot.id !== botId);
    setArmy(updatedArmy);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <BotCollection bots={bots} onBotClick={handleBotClick} />
        <SortBar />
        <YourBotArmy army={army} onReleaseClick={handleReleaseClick} />
      </div>
    </div>
  );
};

export default HomePage;