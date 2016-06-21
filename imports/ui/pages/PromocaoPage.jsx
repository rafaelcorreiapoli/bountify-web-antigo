import React from 'react';
import PromocaoShow from '/imports/ui/components/PromocaoShow';

export default class RestaurantePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	let {promocao, loading, promocaoId} = this.props;
    return (
      <div>
      	{loading ? 'Loading' : <PromocaoShow {...promocao} />}
      </div>
    );
  }
}
