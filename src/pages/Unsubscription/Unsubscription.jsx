import React from 'react';
import subscribe from './unsubscribeService';
import './Unsubscription.css';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import kiwiImg from './kiwi.png';

export default class UnsubscriptionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      isSuccess: false,
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({
      error: null,
      isLoading: true,
    });
    const res = await subscribe();
    if (res.error) {
      this.setState({
        error: res.message,
        isLoading: false,
      });
    } else {
      this.setState({
        error: null,
        isSuccess: true,
        isLoading: false,
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
      <div className="UnsubscriptionPage_content">
        <h1 className="UnsubscriptionPage_content_title">Snif...&nbsp;</h1>
        <p className="UnsubscriptionPage_content_phrase">
          Nous sommes tristes de vous voir partir,
          <br /> mais qui sait peut-être que nous nous reverrons&nbsp;!
        </p>
        <p className="UnsubscriptionPage_content_success_kiwi">
          <img src={kiwiImg} alt="Kiwi content" />
        </p>
        <form className="UnsubscriptionPage_content_form" onSubmit={this.handleSubmit}>
          <input type="hidden" name="js_id" id="js_id" value="349gf" />
          <input type="hidden" name="primary_type" id="primary_type" value="email" />
          <input type="hidden" name="from_url" id="from_url" value="yes" />
          <input
            className="UnsubscriptionPage_content_form_email"
            type="email"
            name="email"
            placeholder="L'adresse email à désinscrire"
          />
          <SubmitButton isLoading={isLoading}>Me désinscrire</SubmitButton>
        </form>
        {error ? <p className="UnsubscriptionPage_content_error">{error}</p> : null}
      </div>
    );
  };

  renderSuccess = () => (
      <div className="UnsubscriptionPage_content">
        <h1 className="UnsubscriptionPage_content_title">Snif&nbsp;!</h1>
        <div className="UnsubscriptionPage_content_success">
          <p>
            Voilà, vous êtes bien désinscrit à notre newsletter. <br />
            Vous ne recevrez plus d&apos;emails de notre part.
          </p>
          <p className="UnsubscriptionPage_content_success_kiwi">
            <img src={kiwiImg} alt="Kiwi content" />
          </p>
        </div>
      </div>
    );

  render() {
    return <div className="UnsubscriptionPage">{this.renderContent()}</div>;
  }
}
