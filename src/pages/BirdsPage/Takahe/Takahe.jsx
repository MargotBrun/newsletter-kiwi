import React from 'react';
import Bird from '../Bird';
import image from './takahe.jpg';
import sound from './takahe.mp3';

export default ({ handleOpenPopup }) => (
  <Bird
    title="Takahē"
    image={image}
    sound={sound}
    handleOpenPopup={handleOpenPopup}
    youtubeId="rjR0ckQ9mnU"
  />
);
