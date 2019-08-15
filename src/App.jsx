import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from './components/Layout/Layout';
import SubscriptionPage from './pages/Subscription/Subscription';
import UnsubscriptionPage from './pages/Unsubscription/Unsubscription';
import ConfidentialityPage from './pages/Confidentiality/Confidentiality';
import AusNzQuizPage from './pages/AusNzQuiz/AusNzQuizPage';
import ListNewsletters from './pages/ListNewsletters/ListNewsletters';
import PicturesNewsletters from './pages/PicturesNewsletters/PicturesNewsletters';
import BirdsPage from './pages/BirdsPage/BirdsPage';

export default () => (
  <Router>
    <Layout>
      <Helmet defaultTitle="Newsletter des kiwis" titleTemplate="%s - Newsletter des kiwis">
        <meta charSet="utf-8" />
      </Helmet>
      <Switch>
        <Route path="/" exact component={SubscriptionPage} />
        <Route path="/desinscription" exact component={UnsubscriptionPage} />
        <Route path="/politique-confidentialite" exact component={ConfidentialityPage} />
        <Route path="/quiz" exact component={AusNzQuizPage} />
        <Route path="/liste" exact component={ListNewsletters} />
        <Route path="/oiseaux" exact component={BirdsPage} />
        <Route path="/pictures" exact component={PicturesNewsletters} />
      </Switch>
    </Layout>
  </Router>
);
