import React from 'react';
import Page from '../../components/Page/Page';
import ShinyLink from '../../components/ShinyLink/ShinyLink';
import sadKiwiImg from './SadKiwi.png';
import './PicturesNewsletters.css';

export default () => (
  <Page title="Désolé..." className="PicturesNewsletters">
    <p className="PicturesNewsletters_kiwi">
      <img className="PicturesNewsletters_kiwi_image" src={sadKiwiImg} alt="Kiwi triste" />
    </p>
    <h2 className="PicturesNewsletters_subtittle">
      Nos albums photos ne sont pas disponibles depuis le site internet.
      <br />
    </h2>
    <p className="PicturesNewsletters_phrase">
      Mais pas de panique, vous pouvez nous envoyer un email en précisant pour quelle.s newsletter.s
      vous souhaitez voir les photos. Nous vous la.les renverrons au plus vite&nbsp;!
    </p>
    <p className="PicturesNewsletters_phrase_email">
      Écrivez-nous dès maintenant à{' '}
      <ShinyLink href="yesreply@margotbrun.com?subject=Je%20souhaite%20recevoir%20des%20newsletters%20avec%20l'acc%C3%A8s%20aux%20photos%20!&body=Bonjour%20la%20newsletter%20des%20Kiwis%20!%0A%0AJe%20souhaite%20recevoir%20la.les%20newsletter.s%20suivante.s%20avec%20l'acc%C3%A8s%20aux%20photos%20(supprimer%20les%20newsletters%20qui%20ne%20vous%20int%C3%A9ressent%20pas)%20%3A%0A-Newsletter%20d'octobre%20(2018)%20%3A%20Auckland,%20quartier%20Ponsonby%0A-Newsletter%20de%20novembre%20(2018)%20%3A%20L'%C3%AEle%20du%20nord,%20des%20plages%20aux%20volcans%20%20!%0A-Newsletter%20de%20d%C3%A9cembre%20(2018)%20%3A%20De%20Sydney%20%C3%A0%20Cairns%20(ou%20pas),%20la%20c%C3%B4te%20est%20australienne%0A-Newsletter%20de%20janvier%20%3A%20Queenstown,%20la%20Reine%20des%20montagnes%0A-Newsletter%20de%20f%C3%A9vrier%20%3A%20C%E2%80%99est%20la%20fin%20de%20l%E2%80%99%C3%A9t%C3%A9%20dans%20les%20montagnes%0A-Newsletter%20de%20mars%20%3A%20Kia%20Kaha%20New%20Zealand%0A-Newsletter%20d'avril%20%3A%20Good%20bye%20Queenstown,%20Hello%20South%20Island%20!%0A-Newsletter%20de%20mail%20%3A%20L'%C3%AEle%20aux%20tr%C3%A9sors%0A-Newsletter%20de%20juin%20%3A%20Windy%20Welli%0A%0AMerci%20!">
        yesreply@margotbrun.com&nbsp;
      </ShinyLink>
      {'!'}
    </p>
  </Page>
);
