import React from 'react';
import './BirdsPage.css';
import Page from '../../components/Page/Page';
import Bellbird from './Bellbird/Bellbird';
import Fantail from './Fantail/Fantail';
import Hihi from './Hihi/Hihi';
import Kaka from './Kaka/Kaka';
import Kiwi from './Kiwi/Kiwi';
import Riroriro from './Riroriro/Riroriro';
import Takahe from './Takahe/Takahe';
import Tieke from './Tieke/Tieke';
import Tui from './Tui/Tui';

export default class BirdsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isPopupOpen: false,
      videoId: null,
    };
  }

  handleOpenPopup = videoId => () => {
    this.setState({
      videoId,
      isPopupOpen: true,
    });
  };

  render() {
    const { isPopupOpen, videoId } = this.state;
    return (
      <Page title="Kei Te Waiata Ngā Manu" className="BirdsPage">
        {isPopupOpen && (
          <button
            type="button"
            className="BirdsPage_popup"
            onClick={() => {
              this.setState({ isPopupOpen: false });
            }}
          >
            <button className="BirdsPage_popup_close" type="button">
              Retour à la liste
            </button>
            <iframe
              className="BirdsPage_popup_iframe"
              title="bellbird"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1&loop=1&playlist&list=PLPl9HD9BbIJ-YJGPzIEW4bjk_eKO8Axu0`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </button>
        )}

        <p className="BirdsPage_subtitle">Le Chant Des Oiseaux</p>
        <h2 className="BirdsPage_catchphrase">
          Directement dans vos oreilles, le chant des oiseaux emblématiques de Nouvelle-Zélande
        </h2>
        <div className="BirdsPage_cards">
          <div className="card-deck">
            <Tui handleOpenPopup={this.handleOpenPopup} />
            <Bellbird handleOpenPopup={this.handleOpenPopup} />
            <Tieke handleOpenPopup={this.handleOpenPopup} />
          </div>
          <div className="card-deck">
            <Kaka handleOpenPopup={this.handleOpenPopup} />
            <Kiwi handleOpenPopup={this.handleOpenPopup} />
            <Takahe handleOpenPopup={this.handleOpenPopup} />
          </div>
          <div className="card-deck">
            <Fantail handleOpenPopup={this.handleOpenPopup} />
            <Riroriro handleOpenPopup={this.handleOpenPopup} />
            <Hihi handleOpenPopup={this.handleOpenPopup} />
          </div>
        </div>
        <div className="BirdsPage_interest">
          <h2 className="BirdsPage_interest_title">(Re)découvrez nos newsletters&nbsp;!</h2>
          <p className="BirdsPage_interest_phrase">
            <strong>100% Kiwi Made</strong>, <strong>0% Spam</strong>.<br /> Vous y trouverez des
            nouvelles de notre périple, de la culture Néo-Zélandaise, un peu d'histoire et beaucoup
            de photos&nbsp;!
          </p>
          <a className="BirdsPage_interest_InscriptionButton" href="/liste">
            <p className="BirdsPage_interest_InscriptionButton_text">Voir les newsletters</p>
          </a>
        </div>
      </Page>
    );
  }
}
