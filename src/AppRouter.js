import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Components/Header';
import Main from './Pages/Main';

const AppRouter = () => (
  <>
    <Router>
      <Layout>
        <Format>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Format>
      </Layout>
    </Router>
  </>
);

export default AppRouter;

const Layout = styled.main`
  display: flex;
  justify-content: center;
  height: 100vmax;
  background-color: #333333;
  overflow-y: scroll;
`;

const Format = styled.section`
  width: 420px;
  height: ${Layout};
  background-color: #eeeeee;
`;
