import React from 'react';
import { Cupons } from '/imports/api/cupons/cupons';
import { createContainer } from 'meteor/react-meteor-data';

class CupomContainer extends React.Component {
  render () {
    const { cupomId } = this.props
    return <div>{cupomId}</div>
  }
}

export default createContainer(({ params: { id } }) => {
  const handler = Meteor.subscribe('cupons.single', { id });
  const cupomReady = handler.ready();
  const cupom = Cupons.findOne(id);
  return {
    cupomReady,
    cupom,
    cupomId: id
  };
}, CupomContainer);
