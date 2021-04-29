import React from 'react';
import {
  BrowserRouter as Router, Switch,
} from 'react-router-dom';
import Header from './Components/Header'

const AppRouter = () => (
  <>
    <Router>
  <Header />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
      </Switch>
    </Router>
    </>
);

export default AppRouter;