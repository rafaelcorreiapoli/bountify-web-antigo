import { AccountsTemplates} from 'meteor/useraccounts:core';
import { browserHistory } from 'react-router';
AccountsTemplates.configure({
	onLogoutHook() {
		browserHistory.push('/');
	}
});
