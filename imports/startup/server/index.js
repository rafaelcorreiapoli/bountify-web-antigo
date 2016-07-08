import './api.js';
import FacebookOAuthInit from './oauth-facebook';

Meteor.startup(function() {
  FacebookOAuthInit()
})
