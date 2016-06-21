import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import renderRoutes from '/imports/startup/client/routes';
import '/imports/startup/client/';


Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
