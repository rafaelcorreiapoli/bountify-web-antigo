import React from 'react';
import RestaurantesList from '/imports/ui/components/RestaurantesList';
import { Restaurantes } from '/imports/api/restaurantes/restaurantes';
import { createContainer } from 'meteor/react-meteor-data';

class RestaurantesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { restaurantes, restaurantesReady} = this.props;

    return (
      <div>
        {
          restaurantesReady ?
            <RestaurantesList restaurantes={restaurantes} />
          :
          <span>Loading...</span>
        }
      </div>
    );
  }
};

export default createContainer(({ params: { id } }) => {
  const restaurantesHandle = Meteor.subscribe('restaurantes');
  const restaurantesReady = restaurantesHandle.ready();
  const restaurantes = Restaurantes.find().fetch();
  return {
    restaurantesReady,
    restaurantes
  };
}, RestaurantesContainer);
