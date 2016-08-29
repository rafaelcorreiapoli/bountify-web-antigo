import './api.js';
import configAccounts from './accounts_config.js';
import facebookOAuthInit from './oauth-facebook';

Meteor.startup(function() {
  facebookOAuthInit()
  configAccounts()
})
