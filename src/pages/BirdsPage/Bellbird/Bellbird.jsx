import React from 'react';
import Bird from '../Bird';
import bellbirdImg from './bellbird.jpg';
import bellbirdSound from './bellbird.mp3';

export default ({ handleOpenPopup }) => (
  <Bird
    title="Korimako (Bellbird)"
    image={bellbirdImg}
    sound={bellbirdSound}
    handleOpenPopup={handleOpenPopup}
    youtubeId="wfifZO49bSM"
  />
);
