import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SubscriptionPage from './pages/Subscription/Subscription';
import UnsubscriptionPage from './pages/Unsubscription/Unsubscription';
import ConfidentialityPage from './pages/Confidentiality/Confidentiality';

export default () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={SubscriptionPage} />
        <Route path="/desinscription" exact component={UnsubscriptionPage} />
        <Route path="/politique-confidentialite" exact component={ConfidentialityPage} />
      </Switch>
    </Layout>
  </Router>
);
