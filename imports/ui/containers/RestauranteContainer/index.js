import React, { Component } from 'react';
import { Restaurantes } from '/imports/api/restaurantes/restaurantes';
import { createContainer } from 'meteor/react-meteor-data';
import RestauranteCard from '/imports/ui/components/RestauranteCard'
import { Grid, Row, Col, Tabs, Tab, Button} from 'react-bootstrap'
import { composeWithTracker } from 'react-komposer'
import {LinkContainer} from 'react-router-bootstrap'

class RestauranteContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {restaurante, restauranteReady, restauranteId, children} = this.props;
    return (
      <div>
        <Row>
          <Col xs={12} md={2}>
            <RestauranteCard {...restaurante} />
          </Col>
          <Col xs={12} md={10}>
            {React.cloneElement(children, {restauranteId})}
          </Col>
        </Row>
      </div>
    );
  }
}


const composer = (props, onData) => {
  const { params: { id } } = props

  const restauranteId = id
  const handle = Meteor.subscribe('restaurantes.single', { id: restauranteId });
  const restauranteReady = handle.ready();
  const restaurante = Restaurantes.findOne(restauranteId);
  onData(null, {
    restauranteReady,
    restaurante,
    restauranteId
  });
}
export default composeWithTracker(composer)(RestauranteContainer)
