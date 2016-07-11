import {React} from 'nylas-exports';

export default class AutoRecipientsPreferences extends React.Component {
  static displayName = 'AutoRecipientsPreferences';

  constructor() {
    super();
    this.state = {
      cc:  NylasEnv.config.get('auto-recipients.cc'),
      bcc: NylasEnv.config.get('auto-recipients.bcc')
    };
  }

  _onSetCcRecipients = (event) => {
    const cc = event.target.value;
    this.setState({cc});
    NylasEnv.config.set(`auto-recipients.cc`, cc)
  }

  _onSetBccRecipients = (event) => {
    const bcc = event.target.value;
    this.setState({bcc});
    NylasEnv.config.set(`auto-recipients.bcc`, bcc)
  }

  render() {
    return (
      <div className="auto-recipients-preferences">
        <p className="intro">
          Automatically add the following recipients to your emails. Make sure you enter valid addresses.
        </p>

        <label htmlFor="cc-recipients">Cc Recipients:</label>
        <input
          className="field"
          id="cc-recipients"
          placeholder="Enter comma-separated emails! E.g. `hello@world.com,forwardto@crm.com`"
          type="text"
          value={this.state.cc}
          onChange={this._onSetCcRecipients} />

        <label htmlFor="bcc-recipients">Bcc Recipients:</label>
        <input
          className="field"
          id="bcc-recipients"
          placeholder="Enter comma-separated emails! E.g. `hello@world.com,forwardto@crm.com`"
          type="text"
          value={this.state.bcc}
          onChange={this._onSetBccRecipients} />
      </div>
    );
  }

}
