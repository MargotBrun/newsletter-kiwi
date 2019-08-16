import React from 'react';
import Bird from '../Bird';
import image from './riroriro.jpg';
import sound from './riroriro.mp3';

export default ({ handleOpenPopup }) => (
  <Bird
    title="Riroriro (Grey Warbler)"
    image={image}
    sound={sound}
    handleOpenPopup={handleOpenPopup}
    youtubeId="SJgvKDot1WA"
  />
);
