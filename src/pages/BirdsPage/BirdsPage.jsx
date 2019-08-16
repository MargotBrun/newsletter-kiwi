import React from 'react';
import './BirdsPage.css';
import Page from '../../components/Page/Page';
import Bellbird from './Bellbird/Bellbird';
import Fantail from './Fantail/Fantail';
import Hihi from './Hihi/Hihi';
import Kaka from './Kaka/Kaka';
import Kiwi from './Kiwi/Kiwi';
import Riroriro from './Riroriro/Riroriro';

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
            className="BirdsPage_popup"
            type="button"
            onClick={() => {
              this.setState({ isPopupOpen: false });
            }}
          >
            <iframe
              className="BirdsPage_popup_iframe"
              title="bellbird"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </button>
        )}

        <h2 className="BirdsPage_subtitle">Le chant des oiseaux de Nouvelle-Zélande</h2>
        <div className="ListNewsletters_content_cards">
          <div className="card-deck">
            <Bellbird handleOpenPopup={this.handleOpenPopup} />
            <Fantail handleOpenPopup={this.handleOpenPopup} />
            <Hihi handleOpenPopup={this.handleOpenPopup} />
          </div>
          <div className="card-deck">
            <Kaka handleOpenPopup={this.handleOpenPopup} />
            <Kiwi handleOpenPopup={this.handleOpenPopup} />
            <Riroriro handleOpenPopup={this.handleOpenPopup} />
          </div>
        </div>
      </Page>
    );
  }
}
