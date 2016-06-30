import { Vouchers } from '../vouchers'

Meteor.publish('vouchers', function() {
	return Vouchers.find();
});
