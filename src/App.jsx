import React from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SubscriptionPage from './pages/Subscription/Subscription';
import UnsubscriptionPage from './pages/Unsubscription/Unsubscription';
import ConfidentialityPage from './pages/Confidentiality/Confidentiality';
import AusNzQuizPage from './pages/AusNzQuiz/AusNzQuizPage';
import ListNewsletters from './pages/ListNewsletters/ListNewsletters';
import PicturesNewsletters from './pages/PicturesNewsletters/PicturesNewsletters';

export default class App extends React.Component {
  componentDidMount = () => {
    ReactGA.initialize('UA-143186341-1');
  };

  render = () => (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={SubscriptionPage} />
          <Route path="/desinscription" exact component={UnsubscriptionPage} />
          <Route path="/politique-confidentialite" exact component={ConfidentialityPage} />
          <Route path="/quiz" exact component={AusNzQuizPage} />
          <Route path="/liste" exact component={ListNewsletters} />
          <Route path="/pictures" exact component={PicturesNewsletters} />
        </Switch>
      </Layout>
    </Router>
  );
}
