import React from 'react';
import ShinyLink from '../ShinyLink/ShinyLink';
import './Layout.css';

export default ({ children }) => (
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
