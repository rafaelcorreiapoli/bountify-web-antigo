import React from 'react';
import CupomShow from '/imports/ui/components/CupomShow';

export default class RestaurantePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	let {cupom, loading, cupomId} = this.props;
    return (
      <div>
      	{loading ? 'Loading' : <CupomShow {...cupom} />}
      </div>
    );
  }
}
