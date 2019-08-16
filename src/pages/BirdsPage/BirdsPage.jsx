import React from 'react';
import './BirdsPage.css';
import Page from '../../components/Page/Page';
import Bellbird from './Bellbird/Bellbird';
import Fantail from './Fantail/Fantail';
import Hihi from './Hihi/Hihi';

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
          <div
            className="BirdsPage_popup"
            role="button"
            tabIndex={0}
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
          </div>
        )}

        <h2 className="BirdsPage_subtitle">Le chant des oiseaux de Nouvelle-Zélande</h2>
        <div className="ListNewsletters_content_cards">
          <div className="card-deck">
            <Bellbird handleOpenPopup={this.handleOpenPopup} />
            <Fantail handleOpenPopup={this.handleOpenPopup} />
            <Hihi handleOpenPopup={this.handleOpenPopup} />
          </div>
        </div>
      </Page>
    );
  }
}
