import React from 'react';
import Bird from '../Bird';
import image from './hihi.jpg';
import sound from './hihi.mp3';

export default ({ handleOpenPopup }) => (
  <Bird
    title="Hihi (Stitchbird)"
    image={image}
    sound={sound}
    handleOpenPopup={handleOpenPopup}
    youtubeId="u_d-MzSpDi0"
  />
);
