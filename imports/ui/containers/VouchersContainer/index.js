import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import VouchersList from '/imports/ui/components/VouchersList'
import { Vouchers } from '/imports/api/vouchers/vouchers';
const VouchersContainer = React.createClass({
  render () {
    let { vouchers } = this.props

    return (
      <div className="ag-fresh" style={{height: 500, width: '100%'}}>
        <VouchersList vouchers={vouchers} />
      </div>
    )
  }
})

export default createContainer(({ params: { id } }) => {
  const handle = Meteor.subscribe('vouchers');
  const vouchersReady = handle.ready();
  const vouchers = Vouchers.find().fetch()
  return {
    vouchers,
    vouchersReady
  };
}, VouchersContainer);
