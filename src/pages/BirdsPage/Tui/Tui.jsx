import React from 'react';
import Bird from '../Bird';
import image from './tui.jpg';
import sound from './tui.mp3';

export default ({ handleOpenPopup }) => (
  <Bird
    title="Tūī"
    image={image}
    sound={sound}
    handleOpenPopup={handleOpenPopup}
    youtubeId="61rDI71QFj4"
  />
);
