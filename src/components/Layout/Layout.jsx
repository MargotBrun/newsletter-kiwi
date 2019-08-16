import React from 'react';
import ShinyLink from '../ShinyLink/ShinyLink';
import homeIcon from './home.png';
import birdsIcon from './birds.png';
import EnveloppeIcon from './icone-enveloppe.png';
import './Layout.css';
import './cards.css';

export default ({ children }) => (
  <div className="Layout">
    <header className="Layout_header">
      <nav className="Layout_nav">
        <a href="/">
          <img src={homeIcon} alt="Accueil" title="Retour à l'accueil" />
        </a>
        <a href="/liste" className="Layout_nav_enveloppe">
          <img src={EnveloppeIcon} alt="enveloppe" title="Lire les newsletter" />
          <span className="Layout_nav_enveloppe_number">8</span>
        </a>
        <a href="/oiseaux">
          <img src={birdsIcon} alt="Le chant des oiseaux" title="Oiseaux de Nouvelle-Zélande" />
        </a>
      </nav>
    </header>
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
