import React from 'react';
import CuponsList from '/imports/ui/components/CuponsList';
import { Cupons } from '/imports/api/cupons/cupons';
import { createContainer } from 'meteor/react-meteor-data';


const CuponsContainer = React.createClass({
  render () {
    let { cupons } = this.props

    return (
      <div className="ag-fresh" style={{height: 500, width: '100%'}}>
        <CuponsList cupons={cupons} />
      </div>
    )
  }
})


export default createContainer(({ restauranteId }) => {
  const handle = Meteor.subscribe('cupons');
  const cuponsReady = handle.ready();
  const cupons = Cupons.find().fetch();
  return {
    cuponsReady,
    cupons
  };
}, CuponsContainer);
