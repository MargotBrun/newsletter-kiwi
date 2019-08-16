import React from 'react';
import Bird from '../Bird';
import image from './kaka.jpg';
import sound from './kaka.mp3';

export default ({ handleOpenPopup }) => (
  <Bird
    title="Kākā"
    image={image}
    sound={sound}
    handleOpenPopup={handleOpenPopup}
    youtubeId="RRsPzcewVYE"
  />
);
