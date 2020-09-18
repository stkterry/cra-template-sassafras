import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './main/Main';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </div>
);

export default App;