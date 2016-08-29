import React from 'react';

import { AgGridReact } from 'ag-grid-react';
import UsersList from '/imports/ui/components/UsersList'
import { composeWithTracker } from 'react-komposer';

const UsersContainer = React.createClass({
  render() {
    let { usuarios } = this.props
    usuarios = usuarios.map((user) => (
      {
        ...user,
        email: user.emails[0].address
      }
    ))

    return (
      <div>
        <UsersList usuarios={usuarios} />
      </div>
    )
  }
})


const composer = (props, onData) => {
  const { restauranteId } = props
  const handle = Meteor.subscribe('users.porRestaurante', {
    restauranteId
  });

  const usuarios = Meteor.users.find({
    restauranteId
  }).fetch();

  if (handle.ready()) {
    onData(null, {
      usuarios
    });
  }
}


export default composeWithTracker(composer)(UsersContainer)
