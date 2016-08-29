import { AccountsTemplates} from 'meteor/useraccounts:core';
import { browserHistory } from 'react-router';
import { activate } from '/imports/api/users/methods'

AccountsTemplates.configure({
	onLogoutHook() {
		browserHistory.push('/');
	},
	onSubmitHook(error, state) {
		console.log('submitting', error, state);
		if (state === 'enrollAccount' && !error) {
			activate.call(null, (err, res) => {
				console.log(err, res);
			})
		}
	}
});
