import 'react-hot-loader/patch';
import React from 'react';
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor';
import { AppContainer as HotLoaderAppContainer } from 'react-hot-loader';  // <-- add this line
import ReactDOM from 'react-dom';
import AppRoutes from '/imports/startup/client/routes'

import '/imports/startup/client/';

Meteor.startup(() => {
  const appElement = document.getElementById('app');

  const renderApp = (CurrentAppRoutes) => {
    ReactDOM.render(
      <HotLoaderAppContainer>
        <CurrentAppRoutes browserHistory={ browserHistory} />
      </HotLoaderAppContainer>
    , appElement)
  }

  renderApp(AppRoutes);

  if (module.hot) {
    module.hot.accept('/imports/startup/client/routes', () => {
      import NextAppRoutes from '/imports/startup/client/routes'
      renderApp(NextAppRoutes)
    });
  }

});
