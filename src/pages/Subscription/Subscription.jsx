import React from 'react';
import subscribe from './subscribeService';
import ShinyLink from '../../components/ShinyLink/ShinyLink';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import './Subscription.css';
import kiwiImg from './kiwi.png';
import EnveloppeImg from './icone-enveloppe.png';
import InstagramImg from './icone-instagram.png';

export default class SubscriptionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      isSuccess: false,
      successMessage: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const res = await subscribe();
    if (res.error) {
      this.setState({
        error: res.message,
      });
    } else {
      this.setState({
        error: null,
        isSuccess: true,
        successMessage: res.message,
      });
    }
  };

  renderContent = () => {
    const { isSuccess } = this.state;
    if (isSuccess) {
      return this.renderSuccess();
    }
    return this.renderForm();
  };

  renderForm = () => {
    const { error, isLoading } = this.state;
    return (
      <div className="SubscriptionPage_content">
        <div className="SubscriptionPage_content_sidelinks">
          <a href="/liste" className="SubscriptionPage_content_sidelinks_enveloppe">
            <img src={EnveloppeImg} alt="enveloppe" />
            <span className="SubscriptionPage_content_sidelinks_enveloppe_number">8</span>
          </a>
          <a href="https://www.instagram.com/djgomart/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramImg} alt="instagram" />
          </a>
        </div>
        <h1 className="SubscriptionPage_content_title">Ce mois-ci au pays des Kiwis&nbsp;!</h1>
        <h2 className="SubscriptionPage_content_subtitle">
          - La newsletter de Margot &amp; Paulin -
        </h2>
        <p className="SubscriptionPage_content_phrase">
          Cinq bonnes raisons de vous inscrire et recevoir un email par mois&nbsp; :
        </p>
        <ul className="SubscriptionPage_content_list">
          <li>restez au fait de nos dernières péripéties&nbsp;;</li>
          <li>profitez de découvertes musicales, littéraires, culinaires, etc.&nbsp;;</li>
          <li>blindez vos connaissances sur la Nouvelle-Zélande&nbsp;;</li>
          <li>
            pour une fois, recevez une newsletter à laquelle vous vous êtes vraiment inscrit ;)
          </li>
        </ul>
        <form className="SubscriptionPage_content_form" onSubmit={this.handleSubmit}>
          <input type="hidden" name="js_id" id="js_id" value="349gf" />
          <input type="hidden" name="listid" id="listid" value="5" />
          <input type="hidden" name="from_url" id="from_url" value="yes" />
          <input type="hidden" name="hdn_email_txt" id="hdn_email_txt" value="" />
          <input
            className="SubscriptionPage_content_form_email"
            type="email"
            name="email"
            placeholder="Votre adresse email"
            required
          />
          <SubmitButton isLoading={isLoading}>Je m&apos;inscris</SubmitButton>
        </form>
        {error ? <p className="SubscriptionPage_content_error">{error}</p> : null}
      </div>
    );
  };

  renderSuccess = () => {
    const { successMessage } = this.state;
    return (
      <div className="SubscriptionPage_content">
        <h1 className="SubscriptionPage_content_title">Merci&nbsp;!</h1>
        <div className="SubscriptionPage_content_success">
          <p>{successMessage}</p>
          <p className="SubscriptionPage_content_success_kiwi">
            <img src={kiwiImg} alt="Kiwi content" />
          </p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="SubscriptionPage">
        {this.renderContent()}
        <div className="SubscriptionPage_instagram">
          <p>Vous voulez aussi en prendre plein la vue&nbsp;?</p>
          <p>
            Suivez nous sur{' '}
            <ShinyLink href="https://www.instagram.com/djgomart/" target="_blank">
              Instagram
            </ShinyLink>
            &nbsp;
            {'!'}
          </p>
        </div>
      </div>
    );
  }
}
