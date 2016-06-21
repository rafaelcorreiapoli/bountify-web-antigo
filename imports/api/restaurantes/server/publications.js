import { Meteor } from 'meteor/meteor';
import { Restaurantes } from '../restaurantes';
import { check } from 'meteor/check';

Meteor.publish('restaurantes', function() {
	return Restaurantes.find();
});


Meteor.publish('restaurantes.single', function({ id }) {
	check(id, String);
	return Restaurantes.find({
		_id: id
	});
});
