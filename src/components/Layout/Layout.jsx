import React from 'react';
import ReactGA from 'react-ga';
import ShinyLink from '../ShinyLink/ShinyLink';
import './Layout.css';

export default class Layout extends React.Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { children } = this.props;
    return (
      <div className="Layout">
        <div className="Layout_content">{children}</div>
        <footer className="Layout_footer">
          <ShinyLink href="/desinscription">Désinscription</ShinyLink>
          {' - '}
          <ShinyLink href="/politique-confidentialite">Confidentialité</ShinyLink>
          {' - '}
          <ShinyLink href="mailto:yesreply@margotbrun.com">Nous contacter</ShinyLink>
        </footer>
      </div>
    );
  }
}
