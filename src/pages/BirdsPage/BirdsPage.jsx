import React from 'react';
import './BirdsPage.css';
import Page from '../../components/Page/Page';
import Bellbird from './Bellbird/Bellbird';

export default () => (
  <Page title="Kei Te Waiata Ngā Manu" className="BirdsPage">
    <h2 className="BirdsPage_subtitle">Le chant des oiseaux de Nouvelle-Zélande</h2>
    <div className="ListNewsletters_content_cards">
      <div className="card-deck">
        <Bellbird />
        <Bellbird />
        <Bellbird />
      </div>
      <div className="card-deck">
        <Bellbird />
        <Bellbird />
        <Bellbird />
      </div>
    </div>
  </Page>
);
