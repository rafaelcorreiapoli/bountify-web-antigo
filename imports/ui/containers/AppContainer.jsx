import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App';

export default AppContainer = createContainer(() => {
  return {
    user: Meteor.user(),
    connected: Meteor.status().connected,
  };
}, App);
