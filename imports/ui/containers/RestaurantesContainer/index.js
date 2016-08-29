import React from 'react';
import RestaurantesList from '/imports/ui/components/RestaurantesList';
import { Restaurantes } from '/imports/api/restaurantes/restaurantes';
import { createContainer } from 'meteor/react-meteor-data';
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { composeWithTracker } from 'react-komposer'

class RestaurantesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleRestauranteClick = this.handleRestauranteClick.bind(this)
  }

  handleRestauranteClick(restaurante) {
    const { router } = this.context
    const { _id } = restaurante
    console.log(restaurante, router)
    router.push(`/restaurante/${_id}`)
  }
  render() {
    let { restaurantes, restaurantesReady} = this.props;


    return (
      <div>
        <Row>
          <Col md={12}>
            <RestaurantesList
              onRestauranteClick={this.handleRestauranteClick}
              restaurantes={restaurantes} />
          </Col>
        </Row>
        <Row style={{marginTop: 20}}>
          <Col md={12}>
            <LinkContainer to='/restaurantes/add'>
               <Button bsStyle="primary"> Criar Restaurante</Button>
            </LinkContainer>
          </Col>
        </Row>
      </div>
    );
  }
};

RestaurantesContainer.contextTypes =  {
  router: React.PropTypes.object
}

const composer = (props, onData) => {
  const { params: { id } } = props

  const restaurantesHandle = Meteor.subscribe('restaurantes');
  const restaurantesReady = restaurantesHandle.ready();
  const restaurantes = Restaurantes.find().fetch();
  onData(null, {
    restaurantesReady,
    restaurantes
  });
}
export default composeWithTracker(composer)(RestaurantesContainer);
