import React from 'react';

import { createContainer } from 'meteor/react-meteor-data';
import {AgGridReact} from 'ag-grid-react';
import UsuariosList from '/imports/ui/components/UsuariosList'
const UsuariosContainer = React.createClass({
  
  render () {
    let { usuarios } = this.props


    usuarios = usuarios.map((user) => (
      {
        _id: user._id,
        email: user.emails[0].address
      }
    ))

    return (
      <div className="ag-fresh" style={{height: 500, width: '100%'}}>
        <UsuariosList usuarios={usuarios} />
      </div>
    )
  }
})

export default createContainer(({ params: { id } }) => {
  const handle = Meteor.subscribe('usuarios');
  const usuariosReady = handle.ready();
  const usuarios = Meteor.users.find().fetch();
  return {
    usuarios,
    usuariosReady
  };
}, UsuariosContainer);
