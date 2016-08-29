import { Meteor } from 'meteor/meteor';

Meteor.publish('users', function() {
	return Meteor.users.find();
});


Meteor.publishComposite('users.porRestaurante', function({ restauranteId }) {
	check(restauranteId, String);
	return {
		find() {
			return Meteor.users.find({
				restauranteId
			});
		}
	};
});
