import React from 'react';
import ShinyLink from '../../components/ShinyLink/ShinyLink';
import './Subscription.css';

export default class SubscriptionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SubscriptionPage">
        <div className="SubscriptionPage_content">
          <h1 className="SubscriptionPage_content_title">Ce mois-ci au pays des Kiwis&nbsp;!</h1>
          <h2 className="SubscriptionPage_content_subtitle">
            - La newsletter de Margot &amp; Paulin -
          </h2>
          <p className="SubscriptionPage_content_phrase">
            Tout au long de notre voyage recevez un email par mois pour&nbsp;:
          </p>
          <ul className="SubscriptionPage_content_list">
            <li>rester au fait de nos dernières péripéties&nbsp;;</li>
            <li>découvrir la photo du mois&nbsp;;</li>
            <li>profiter de découvertes musicales, littéraires, culinaires, etc.&nbsp;;</li>
            <li>en apprendre plus sur la Nouvelle-Zélande.</li>
          </ul>
          <form className="SubscriptionPage_content_form">
            <input
              className="SubscriptionPage_content_form_email"
              type="email"
              placeholder="Votre adresse email"
            />
            <button className="SubscriptionPage_content_form_submit" type="submit">
              Je m'inscris
            </button>
          </form>
        </div>
        <div className="SubscriptionPage_instagram">
          <p>Vous voulez aussi en prendre plein la vue ?</p>
          <p>
            Suivez nous sur{' '}
            <ShinyLink href="https://www.instagram.com/djgomart/" target="_blank">
              Instagram !
            </ShinyLink>
          </p>
        </div>
      </div>
    );
  }
}
