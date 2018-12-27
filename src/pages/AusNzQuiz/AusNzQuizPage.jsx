import React from 'react';
import AusNzQuiz from './AusNzQuiz';
import vanPicture from './pictures/van.jpg';
import './AusNzQuizPage.css';

export default () => (
  <div className="AusNzQuizPage">
    <h1 className="AusNzQuizPage_title">Nouvelle-Zélande ou Australie, le&nbsp;Quiz&nbsp;!</h1>
    <p className="AusNzQuizPage_subtitle">
      Essayez de deviner dans quel pays les photos suivantes ont été prises.
      <br />
      Attention, il y a des pièges ;)
    </p>
    <AusNzQuiz />
    <hr className="AusNzQuizPage_separator" />
    <p className="AusNzQuizPage_thanks">Merci d&apos;avoir parcitipé à notre quiz !</p>
    <p className="AusNzQuizPage_footer">
      Réalisé à l&apos;arrière d&apos;un van lancé à pleine vitesse sur les routes de
      l&apos;Australie. Nausée garantie&nbsp;!!
      <img className="AusNzQuizPage_footer_van" src={vanPicture} alt="Ca bosse dur dans le van" />
    </p>
  </div>
);
