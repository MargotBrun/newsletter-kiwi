import React from 'react';
import Bird from '../Bird';
import image from './kiwi.jpg';
import sound from './kiwi.mp3';

export default ({ handleOpenPopup }) => (
  <Bird
    title="Kiwi"
    image={image}
    sound={sound}
    handleOpenPopup={handleOpenPopup}
    youtubeId="Bz2J3nqHNAQ"
  />
);
