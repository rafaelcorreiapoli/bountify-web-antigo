import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Chance } from 'chance';

export const invite = new ValidatedMethod({
  name: 'users.invite',
  validate({email, restauranteId, role}) {
    check(email, String)
    check(restauranteId, String)
    check(role, String);
  },
  run({ email, restauranteId, role }) {
    if (!this.isSimulation) {
      this.unblock();
      chance = new Chance();
      let password = chance.bb_pin();
      let options = {
        email,
        password,
        restauranteId
      };

      try {
        let userId = Accounts.createUser(options);
        Accounts.sendEnrollmentEmail(userId, email);
        Roles.addUsersToRoles(userId, role);
        return true;
      } catch (e) {
        throw new Meteor.Error(e.toString());
      }
    }
    return true;
  }
});

export const activate = new ValidatedMethod({
  name: 'users.activate',
  validate: null,
  run() {
    console.log(Meteor.userId())
    return Meteor.users.update({
      _id: Meteor.userId()
    }, {
      $set: {
        active: true
      }
    })
  }
});
