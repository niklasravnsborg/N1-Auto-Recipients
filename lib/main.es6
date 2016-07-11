import {ExtensionRegistry, PreferencesUIStore} from 'nylas-exports';
import AutoRecipientsComposerExtension from './auto-recipients-composer-extension';
import AutoRecipientsPreferences from './auto-recipients-preferences';

export function activate() {
  ExtensionRegistry.Composer.register(AutoRecipientsComposerExtension);

  this.preferencesTab = new PreferencesUIStore.TabItem({
    tabId: "AutoRecipientsPreferences",
    displayName: "Auto Recipients",
    component: AutoRecipientsPreferences,
  });

  PreferencesUIStore.registerPreferencesTab(this.preferencesTab);
}

export function deactivate() {
  ExtensionRegistry.Composer.unregister(AutoRecipientsComposerExtension);
  PreferencesUIStore.unregisterPreferencesTab(this.preferencesTab.sectionId)
}
