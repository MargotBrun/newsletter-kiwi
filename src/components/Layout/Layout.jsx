import React from 'react';
import ShinyLink from '../ShinyLink/ShinyLink';
import './Layout.css';

export default ({ children }) => (
  <div className="Layout">
    {children}
    <footer className="Layout_footer">
      <ShinyLink to="/se-desinscrire">Se désinscrire</ShinyLink>
      {' - '}
      <ShinyLink href="mailto:paulin.trognon@gmail.com">
        Nous contacter
      </ShinyLink>
    </footer>
  </div>
);
