import {Contact, ComposerExtension} from 'nylas-exports';

export default class AutoRecipientsComposerExtension extends ComposerExtension {

  static prepareNewDraft = ({draft}) => {

    var autoRecipients = (configString, defaultRecipients = []) => {

      let emails = NylasEnv.config.get(configString).split(','),
          contacts = [];

      emails.forEach(function(email) {
        if (email) {
          contacts.push(new Contact({email}));
        }
      });

      return defaultRecipients.concat(contacts);

    };

    draft.cc  = autoRecipients('auto-recipients.cc',  draft.cc);
    draft.bcc = autoRecipients('auto-recipients.bcc', draft.bcc);

  }

}
