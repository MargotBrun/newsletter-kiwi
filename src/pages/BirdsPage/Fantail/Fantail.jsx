import React from 'react';
import Bird from '../Bird';
import bellbirdImg from './fantail.jpg';
import bellbirdSound from './fantail.mp3';

export default ({ handleOpenPopup }) => (
  <Bird
    title="Pīwakawaka (Fantail)"
    image={bellbirdImg}
    sound={bellbirdSound}
    handleOpenPopup={handleOpenPopup}
    youtubeId="An_TrhvFanY"
  />
);
