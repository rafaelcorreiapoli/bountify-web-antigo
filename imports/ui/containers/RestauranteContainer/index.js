import React, { Component } from 'react';
import { Restaurantes } from '/imports/api/restaurantes/restaurantes';
import { createContainer } from 'meteor/react-meteor-data';
import RestauranteCard from '/imports/ui/components/RestauranteCard'
import { Grid, Row, Col, Tabs, Tab, Button} from 'react-bootstrap'

import {LinkContainer} from 'react-router-bootstrap'
// import RespostasContainer from '/imports/ui/containers/RespostasContainer'
class RestauranteContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	let {restaurante, restauranteReady, restauranteId, children} = this.props;
    return (
      <div>
        {
          restauranteReady ?
           <Row>
             <Col xs={12} md={2}>
               <RestauranteCard {...restaurante} />
             </Col>
             <Col xs={12} md={10}>
               {React.cloneElement(children, {restauranteId})}
             </Col>
           </Row>
          :
          <span>Loading...</span>
         }

      </div>
    );
  }
}


export default createContainer(({ params: { id } }) => {
  const restauranteId = id
  console.log('restauranteId:', restauranteId)
  const handle = Meteor.subscribe('restaurantes.single', { id: restauranteId });
  const restauranteReady = handle.ready();
  const restaurante = Restaurantes.findOne(restauranteId);
  return {
    restauranteReady,
    restaurante,
    restauranteId
  };
}, RestauranteContainer);
