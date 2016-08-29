import { Accounts } from 'meteor/accounts-base'
import { activate } from '/imports/api/users/methods'

export default function configAccounts() {
  Accounts.urls.enrollAccount = function(token) {
    return Meteor.absoluteUrl('enroll-account/' + token);
  };

  Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('reset-password/' + token);
  };

  Accounts.onCreateUser(function(options, user) {
    if (options.restauranteId) {
      user.restauranteId = options.restauranteId;
    }
    user.profile = options.profile || {};
    return user;
  });
}
