import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import YourBotArmy from './YourBotArmy';
import SortBar from './SortBar';


const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);
  const [filteredBots, setFilteredBots] = useState([]);
  const [sortBy, setSortBy] = useState('health');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    axios.get('/api/bots').then(response => {
      setBots(response.data);
      setFilteredBots(response.data);
    });
  }, []);

  const handleEnlist = bot => {
    setYourBots([...yourBots, bot]);
    setFilteredBots(filteredBots.filter(b => b.id!== bot.id));
  };

  const handleRelease = bot => {
    setYourBots(yourBots.filter(b => b.id!== bot.id));
  };

  const handleFilterChange = filters => {
    setFilters(filters);
    const filteredBots = bots.filter(bot => {
      for (const filter in filters) {
        if (bot[filter]!== filters[filter]) return false;
      }
      return true;
    });
    setFilteredBots(filteredBots);
  };

  const handleSortChange = sortBy => {
    setSortBy(sortBy);
    const sortedBots = filteredBots.sort((a, b) => a[sortBy] - b[sortBy]);
    setFilteredBots(sortedBots);
  };
}
  