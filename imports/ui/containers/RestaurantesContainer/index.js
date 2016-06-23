import React from 'react';
import RestaurantesList from '/imports/ui/components/RestaurantesList';
import { Restaurantes } from '/imports/api/restaurantes/restaurantes';
import { createContainer } from 'meteor/react-meteor-data';
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
class RestaurantesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleRestauranteClick = this.handleRestauranteClick.bind(this)
  }

  handleRestauranteClick(restaurante) {
    const { router } = this.context
    const { _id } = restaurante
    console.log(restaurante, router)
    router.push(`/restaurantes/${_id}`)
  }
  render() {
    let { restaurantes, restaurantesReady} = this.props;


    return (
      <div>
        <Row>
          <Col md={12}>
            <LinkContainer to='/restaurantes/add'>
               <Button bsStyle="primary"> Criar Restaurante</Button>
            </LinkContainer>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {
              restaurantesReady ?
                <RestaurantesList
                  onRestauranteClick={this.handleRestauranteClick}
                  restaurantes={restaurantes} />
              :
              <span>Loading...</span>
            }
          </Col>
        </Row>

      </div>
    );
  }
};

RestaurantesContainer.contextTypes =  {
  router: React.PropTypes.object
}

export default createContainer(({ params: { id } }) => {
  const restaurantesHandle = Meteor.subscribe('restaurantes');
  const restaurantesReady = restaurantesHandle.ready();
  const restaurantes = Restaurantes.find().fetch();
  return {
    restaurantesReady,
    restaurantes
  };
}, RestaurantesContainer);
