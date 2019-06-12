import React from 'react';
import './ListNewsletters.css';

export default () => (
  <div className="ListNewsletters_content">
    <div className="ListNewsletters_content_header">
      <h1 className="ListNewsletters_content_header_title">Toutes nos newsletters&nbsp;!</h1>
      <p className="ListNewsletters_content_header_phrase">
        Depuis quelques mois nous parcourons la Nouvelle-Zélande (et un peu l'Australie).
        <br /> Retrouvez toutes nos péripéties dans nos newsletters, mois par mois&nbsp;!
      </p>
    </div>
    <div className="ListNewsletters_content_cards">
      <div className="card-deck">
        <div className="card">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/6234/MIbCzcvxQdahamZSNQ26_12082014-IMG_3526.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">L'île aux trésors</h5>
            <p className="card-text">
              Merveilleuse île du Sud et ses paysages à couper le souffle.
              <br /> La nature sous toutes ses formes, sans filtres.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-mute">Lire la newsletter de mai</small>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to additional content.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-mute">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show that equal height
              action.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-mute">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div className="card-deck">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-mute">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to additional content.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-mute">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show that equal height
              action.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-mute">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
    <div className="ListNewsletters_content_interest">
      <h1 className="ListNewsletters_content_interest_title">Ça vous intéresse&nbsp;?</h1>
      <p className="ListNewsletters_content_interest_phrase">
        Inscrivez-vous pour recevoir notre newsletter une fois par mois,
        <br />
        <strong>100% Kiwi Made</strong>, <strong>0% Spam</strong>.<br /> Vous y trouverez des
        nouvelles de notre périple, de la culture Néo-Zélandaise, un peu d'histoire et beaucoup de
        photos...&nbsp;!
      </p>
      <a
        className="ListNewsletters_content_interest_InscriptionButton"
        href="/newsletter.margotbrun.com/"
      >
        <p className="ListNewsletters_content_interest_InscriptionButton_text">
          Inscrivez-vous&nbsp;!
        </p>
      </a>
    </div>
  </div>
);
