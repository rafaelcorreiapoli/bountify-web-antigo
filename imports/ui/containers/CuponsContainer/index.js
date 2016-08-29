import React, { Component } from 'react';
import CuponsList from '/imports/ui/components/CuponsList';
import { Cupons } from '/imports/api/cupons/cupons';
import { createContainer } from 'meteor/react-meteor-data';


class CuponsContainer extends Component {
  constructor(props) {
    super(props)
    this.handleOnCupomClick = this.handleOnCupomClick.bind(this)
  }

  handleOnCupomClick(cupom) {
    const { router } = this.context
    const { _id } = cupom
    router.push(`/cupons/${_id}`)
  }
  render () {
    let { cupons } = this.props

    return (
      <div className="ag-fresh" style={{height: 500, width: '100%'}}>
        <CuponsList
          cupons={cupons}
          onCupomClick={this.handleOnCupomClick} />
      </div>
    )
  }
}


CuponsContainer.contextTypes =  {
  router: React.PropTypes.object
}
export default createContainer(({ restauranteId }) => {
  const handle = Meteor.subscribe('cupons');
  const cuponsReady = handle.ready();
  const cupons = Cupons.find().fetch();
  return {
    cuponsReady,
    cupons
  };
}, CuponsContainer);
