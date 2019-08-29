import React from 'react';
import './ListNewsletters.css';
import Page from '../../components/Page/Page';
import ShinyLink from '../../components/ShinyLink/ShinyLink';
import HeaderOctobrePicture from './pictures/Header-Octobre.jpg';
import HeaderNovemberPicture from './pictures/Header-November.jpg';
import HeaderDecembrePicture from './pictures/Header-Decembre.jpg';
import HeaderJanvierPicture from './pictures/Header-Janvier.jpg';
import HeaderFevPicture from './pictures/Header-Fev.jpg';
import HeaderMarchPicture from './pictures/Header-March.jpg';
import HeaderAvrilPicture from './pictures/Header-Avril.jpg';
import HeaderMaiPicture from './pictures/Header-Mai.jpg';
import HeaderJuinPicture from './pictures/Header-Juin.jpg';
import HeaderJuilletPicture from './pictures/Header-Juillet.jpg';
import HeaderAoutPicture from './pictures/Header-Aout.jpg';

export default () => (
  <Page className="ListNewsletters" title="Toutes nos newsletters !">
    <div className="ListNewsletters_content_header">
      <p className="ListNewsletters_content_header_phrase">
        Depuis quelques mois nous parcourons la Nouvelle-Zélande (et un peu l'Australie).
        <br /> Retrouvez toutes nos péripéties dans nos newsletters, mois par mois&nbsp;!
      </p>
    </div>
    <div className="ListNewsletters_content_cards">
      <div className="card-deck">
        <div className="card">
          <a
            href="http://sh1.sendinblue.com/nc4glolx4c.html?t=1560470731"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={HeaderOctobrePicture}
              className="card-img-top"
              alt="Auckland, quartier de Ponsonby"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Auckland, quartier de Ponsonby</h5>
            <p className="card-text">
              Ça y est, nous avons fait le grand saut, nous voici maintenant de l'autre côté du
              monde ! On vous en dit un peu plus sur le pays des Kiwis avec quelques chiffres et on
              vous parle de la "sylver fern" ou "Kaponga" en Māori (qui est partout).
            </p>
          </div>
          <div className="card-footer">
            <ShinyLink
              href="http://sh1.sendinblue.com/nc4glolx4c.html?t=1560470731"
              target="_blank"
              rel="noopener noreferrer"
              multicolor
            >
              <small>Lire la newsletter d'octobre (2018)</small>
            </ShinyLink>
          </div>
        </div>
        <div className="card">
          <a
            href="http://sh1.sendinblue.com/ncwwlolx4c.html?t=1560470731"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={HeaderNovemberPicture}
              className="card-img-top"
              alt="L'île du nord, des plages aux volcans"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">L'île du nord, des plages aux volcans &nbsp;!</h5>
            <p className="card-text">
              Voyagez avec nous sur l'île nord de la Nouvelle-Zélande et découvrez le concept de
              "HelpX". On s'attarde aussi sur le kiwi (l'animal), espèce endémique de
              Nouvelle-Zélande et emblème national. Et comme on est sympa, ce mois-ci on vous donne
              aussi des idées de cadeaux <i>from NZ</i> !
            </p>
          </div>
          <div className="card-footer">
            <ShinyLink
              href="http://sh1.sendinblue.com/ncwwlolx4c.html?t=1560470731"
              target="_blank"
              rel="noopener noreferrer"
              multicolor
            >
              <small>Lire la newsletter de novembre (2018)</small>
            </ShinyLink>
          </div>
        </div>
        <div className="card">
          <a
            href="http://sh1.sendinblue.com/nd6dxolx4c.html?t=1560470731"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={HeaderDecembrePicture}
              className="card-img-top"
              alt="De Sydney à Cairns (ou pas), la côte est australienne"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">De Sydney à Cairns (ou pas), la côte est australienne</h5>
            <p className="card-text">
              Road trip en Australie avec la Gang Canadienne (si si). A-t-on plus de chance de
              mourir sur les routes dans notre van ou piqué par un serpent mortel ? Réponse dans
              cette newsletter. Jouez aussi à différencier les paysages de la côte est australienne
              de ceux de l'île nord de la Nouvelle-Zélande.
            </p>
          </div>
          <div className="card-footer">
            <ShinyLink
              href="http://sh1.sendinblue.com/nd6dxolx4c.html?t=1560470731"
              target="_blank"
              rel="noopener noreferrer"
              multicolor
            >
              <small>Lire la newsletter de décembre (2018)</small>
            </ShinyLink>
          </div>
        </div>
      </div>
      <div className="card-deck">
        <div className="card">
          <a
            href="http://sh1.sendinblue.com/ndfv9olx4c.html?t=1560470731"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={HeaderJanvierPicture}
              className="card-img-top"
              alt="Queenstown, la Reine des montagnes"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Queenstown, la Reine des montagnes ⛰️⛰️</h5>
            <p className="card-text">
              Randos et petits boulots au cœur de l'île du Sud. On vous parle aussi de deux reines :
              Elizabeth II, souveraine du Comonwealth et Tash Sulatana, australienne reine du reggae
              et du rock alternatif.
            </p>
          </div>
          <div className="card-footer">
            <ShinyLink
              href="http://sh1.sendinblue.com/ndfv9olx4c.html?t=1560470731"
              target="_blank"
              rel="noopener noreferrer"
              multicolor
            >
              <small>Lire la newsletter de janvier</small>
            </ShinyLink>
          </div>
        </div>
        <div className="card">
          <a
            href="http://sh1.sendinblue.com/ndpclolx4c.html?t=1560470731"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={HeaderFevPicture}
              className="card-img-top"
              alt="C’est la fin de l’été dans les montagnes"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">C’est la fin de l’été dans les montagnes</h5>
            <p className="card-text">
              Découverte du "disc golf", commémoration du Waitangui Day et expressions
              Néo-Zélandaises. Voici un "wee bit" de résumé du mois écoulé.
            </p>
          </div>
          <div className="card-footer">
            <ShinyLink
              href="http://sh1.sendinblue.com/ndpclolx4c.html?t=1560470731"
              target="_blank"
              rel="noopener noreferrer"
              multicolor
            >
              <small>Lire la newsletter de février</small>
            </ShinyLink>
          </div>
        </div>
        <div className="card">
          <a
            href="http://sh1.sendinblue.com/ne8b9olx4c.html?t=1560470731"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={HeaderMarchPicture} className="card-img-top" alt="Kia Kaha New Zealand" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Kia Kaha New Zealand</h5>
            <p className="card-text">
              Un autre mois passé à Queenstown, Le Women's Day en Nouvelle-Zélande et la compétition
              "Golden Shears" (les "cisailles d'or") passée au peigne fin.
            </p>
          </div>
          <div className="card-footer">
            <ShinyLink
              href="http://sh1.sendinblue.com/ne8b9olx4c.html?t=1560470731"
              target="_blank"
              rel="noopener noreferrer"
              multicolor
            >
              <small>Lire la newsletter de mars</small>
            </ShinyLink>
          </div>
        </div>
      </div>
      <div className="card-deck">
        <div className="card">
          <a
            href="http://sh1.sendinblue.com/nehslolx4c.html?t=1560470731"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={HeaderAvrilPicture}
              className="card-img-top"
              alt="Good bye Queenstown, Hello South Island"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Good bye Queenstown, Hello South Island&nbsp;!</h5>
            <p className="card-text">
              Lors de notre dernier mois à travailler dans l'effervescente reine des montagnes, nous
              avons fait connaissance avec le Roi du frisson A.J Hackett. Ce nom vous dit quelque
              chose ?
            </p>
          </div>
          <div className="card-footer">
            <ShinyLink
              href="http://sh1.sendinblue.com/nehslolx4c.html?t=1560470731"
              target="_blank"
              rel="noopener noreferrer"
              multicolor
            >
              <small>Lire la newsletter d'avril</small>
            </ShinyLink>
          </div>
        </div>
        <div className="card">
          <a
            href="http://sh1.sendinblue.com/ner9xolx4c.html?t=1561074838"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={HeaderMaiPicture} className="card-img-top" alt="L'île aux trésors" />
          </a>
          <div className="card-body">
            <h5 className="card-title">L'île aux trésors</h5>
            <p className="card-text">
              Merveilleuse île du Sud et ses paysages à couper le souffle : la nature sous toutes
              ses coutures. Découvrez ensuite la jade de Nouvelle-Zélande, la Pounamu !
            </p>
          </div>
          <div className="card-footer">
            <ShinyLink
              href="http://sh1.sendinblue.com/ner9xolx4c.html?t=1561074838"
              target="_blank"
              rel="noopener noreferrer"
              multicolor
            >
              <small>Lire la newsletter de mai</small>
            </ShinyLink>
          </div>
        </div>
        <div className="card">
          <a
            href="http://sh1.sendinblue.com/ng2ololx4c.html?t=1561696899"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={HeaderJuinPicture} className="card-img-top" alt="L'île aux Windy Welli" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Windy Welli</h5>
            <p className="card-text">
              Ce mois-ci retour à la vie citadine dans la capitale Wellington ! On fête aussi le
              nouvel an Māori, le Matariki et on vous apprend ce qu'est le "zorbing" en
              Nouvelle-Zélande.
            </p>
          </div>
          <div className="card-footer">
            <ShinyLink
              href="http://sh1.sendinblue.com/ng2ololx4c.html?t=1561696899"
              target="_blank"
              rel="noopener noreferrer"
              multicolor
            >
              <small>Lire la newsletter de juin</small>
            </ShinyLink>
          </div>
        </div>
      </div>

      <div className="card-deck">
        <div className="card">
          <a
            href="http://sh1.sendinblue.com/nh4lxolx4c.html?t=1566884749"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={HeaderJuilletPicture}
              className="card-img-top"
              alt="Un mois musclé en activités"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Un mois musclé en activités&nbsp;!</h5>
            <p className="card-text">
              Deuxième mois passé à Wellington. Entre nos boulots respectifs et quelques jours de
              grosses pluies, nous avons tout de même réussi à faire des sorties bien sympas. La
              rencontre avec une colonie de phoques et le match des All Blacks en sont les
              principales !
            </p>
          </div>
          <div className="card-footer">
            <ShinyLink
              href="http://sh1.sendinblue.com/nh4lxolx4c.html?t=1566884749"
              target="_blank"
              rel="noopener noreferrer"
              multicolor
            >
              <small>Lire la newsletter de Juillet</small>
            </ShinyLink>
          </div>
        </div>
        <div className="card">
          <a
            href="http://sh1.sendinblue.com/ni6j9olx4c.html?t=1567043995"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={HeaderAoutPicture}
              className="card-img-top"
              alt="Le pays des Kiwis c'est fini"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Le pays des Kiwis c'est fini 🥝</h5>
            <p className="card-text">
              Dernier mois aux allures de bouquet final au pays des Kiwis ! Entre culture et nature
              nous en avons tiré <i>the most of it</i> et c'est (presque) sans aucun regret que nous
              nous envolons pour quelques jours en Asie.
            </p>
          </div>
          <div className="card-footer">
            <ShinyLink
              href="http://sh1.sendinblue.com/ni6j9olx4c.html?t=1567043995"
              target="_blank"
              rel="noopener noreferrer"
              multicolor
            >
              <small>Lire la newsletter d'août</small>
            </ShinyLink>
          </div>
        </div>
        <div className="card card-hidden" />
      </div>
    </div>
    <div className="ListNewsletters_content_interest">
      <h1 className="ListNewsletters_content_interest_title">Ça vous intéresse&nbsp;?</h1>
      <p className="ListNewsletters_content_interest_phrase">
        Inscrivez-vous pour recevoir notre newsletter une fois par mois,
        <br />
        <strong>100% Kiwi Made</strong>, <strong>0% Spam</strong>.<br /> Vous y trouverez des
        nouvelles de notre périple, de la culture Néo-Zélandaise, un peu d'histoire et beaucoup de
        photos&nbsp;!
      </p>
      <a className="ListNewsletters_content_interest_InscriptionButton" href="/">
        <p className="ListNewsletters_content_interest_InscriptionButton_text">
          Inscrivez-vous&nbsp;!
        </p>
      </a>
    </div>
  </Page>
);
