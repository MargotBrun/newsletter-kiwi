import React from 'react';
import Bird from '../Bird';
import image from './tieke.jpg';
import sound from './tieke.mp3';

export default ({ handleOpenPopup }) => (
  <Bird
    title="Tīeke (Saddleback)"
    image={image}
    sound={sound}
    handleOpenPopup={handleOpenPopup}
    youtubeId="HZZ5jNdegok"
  />
);
