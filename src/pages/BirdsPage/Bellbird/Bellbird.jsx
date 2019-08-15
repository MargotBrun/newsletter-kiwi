import React from 'react';
import ShinyLink from '../../../components/ShinyLink/ShinyLink';
import BellbirdImg from './bellbird.jpg';
import BellbirdSound from './bellbird.mp3';

export default () => (
  <div className="card">
    <img src={BellbirdImg} className="card-img-top" alt="Auckland, quartier de Ponsonby" />
    <div className="card-body">
      <h5 className="card-title">Korimako (Bellbird)</h5>
      <small>Version Audio</small>
      <audio controls className="BirdsPage_audio">
        <source src={BellbirdSound} type="audio/mpeg" />
      </audio>
    </div>
    <div className="card-footer">
      <ShinyLink
        href="http://sh1.sendinblue.com/nc4glolx4c.html?t=1560470731"
        target="_blank"
        rel="noopener noreferrer"
        multicolor
      >
        <small>Voir la version vidéo</small>
      </ShinyLink>
    </div>
  </div>
);
