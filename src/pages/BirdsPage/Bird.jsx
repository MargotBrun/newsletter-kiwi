import React from 'react';
import ShinyLink from '../../components/ShinyLink/ShinyLink';
import playImg from './play.png';

export default ({ title, image, sound, youtubeId, handleOpenPopup }) => (
  <div className="card">
    <button type="button" className="BirdsPage_button" onClick={handleOpenPopup(youtubeId)}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="BirdsPage_button_hover">
        <img src={playImg} alt="Lire la vidéo" />
      </div>
    </button>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <audio controls className="BirdsPage_audio">
        <source src={sound} type="audio/mpeg" />
      </audio>
    </div>
    <div className="card-footer BirdsPage_footer">
      <ShinyLink multicolor onClick={handleOpenPopup(youtubeId)}>
        <svg width="25px" height="25px" viewBox="0 0 512 512">
          <path d="M480,0H32C14.313,0,0,14.328,0,32v448c0,17.688,14.313,32,32,32h448c17.688,0,32-14.312,32-32V32   C512,14.328,497.688,0,480,0z M320,32l32,64h-64l-32-64H320z M192,32l32,64h-64l-32-64H192z M32,32h32l32,64H32V32z M480,480H32   V128h448V480z M480,96h-64l-32-64h64l32,32V96z M355.375,289.688c15.75,7.875,15.75,20.75,0,28.625l-166.75,83.375   C172.875,409.562,160,401.594,160,384V224c0-17.594,12.875-25.563,28.625-17.688L355.375,289.688z" />
        </svg>{' '}
        Voir la version vidéo
      </ShinyLink>
    </div>
  </div>
);
