import React from 'react';
import { Cupons } from '/imports/api/cupons/cupons';
import { createContainer } from 'meteor/react-meteor-data';
import QRCode from 'qrcode.react';

class CupomContainer extends React.Component {
  render () {
    const { cupomId, cupom } = this.props
    return (
      <div>
        <QRCode value={cupom.token} size={400} />
      </div>
    )
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
