import React from 'react';
import ShinyLink from '../ShinyLink/ShinyLink';
import './Layout.css';

export default ({ children }) => (
  <div className="Layout">
    <div className="Layout_content">{children}</div>
    <footer className="Layout_footer">
      <ShinyLink to="/desinscription">Désinscription</ShinyLink>
      {' - '}
      <ShinyLink to="/politique-confidentialite">Confidentialité</ShinyLink>
      {' - '}
      <ShinyLink href="mailto:yesreply@margotbrun.com">Nous contacter</ShinyLink>
    </footer>
  </div>
);
