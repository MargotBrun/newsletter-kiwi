import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SubscriptionPage from './pages/Subscription/Subscription';

export default () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/inscription" exact component={SubscriptionPage} />
      </Switch>
    </Layout>
  </Router>
);
