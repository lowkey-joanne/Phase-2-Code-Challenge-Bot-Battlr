import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BotDetailsPage from './pages/BotDetailsPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/bots/:botId" component={BotDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;