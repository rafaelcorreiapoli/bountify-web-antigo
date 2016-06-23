import React, { Component } from 'react';
import RestaurantePage from '/imports/ui/pages/RestaurantePage';
import { Restaurantes } from '/imports/api/restaurantes/restaurantes';
import { createContainer } from 'meteor/react-meteor-data';
import RestauranteCard from '/imports/ui/components/RestauranteCard'
import { Grid, Row, Col, Tabs, Tab, Button} from 'react-bootstrap'
import PromocoesContainer from '/imports/ui/containers/PromocoesContainer'
import QuestionariosContainer from '/imports/ui/containers/QuestionariosContainer'
import CuponsContainer from '/imports/ui/containers/CuponsContainer'
import VouchersContainer from '/imports/ui/containers/VouchersContainer'
import {LinkContainer} from 'react-router-bootstrap'
// import RespostasContainer from '/imports/ui/containers/RespostasContainer'
class RestauranteContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	let {restaurante, restauranteReady, restauranteId} = this.props;
    console.log(restaurante)
    return (
      <div>
        {/*<Grid>*/}
           <Row>
             <Col xs={12} md={4}>
               <RestauranteCard {...restaurante} />
             </Col>
             <Col xs={12} md={8}>
               <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                 <Tab eventKey={1} title="Promoções">
                   {/*<Grid>
                     <Row>
                       <Col md={12}>
                         <PromocoesContainer />
                       </Col>
                     </Row>
                     <Row>
                       <Col md={12}>
                         <Button bsStyle="primary"> Criar Promoção</Button>
                       </Col>
                     </Row>
                   </Grid>*/}
                   <PromocoesContainer />
                   <LinkContainer to={`/restaurantes/${restauranteId}/promocoes/add`}>
                      <Button bsStyle="primary"> Criar Promoção</Button>
                   </LinkContainer>
                 </Tab>
                 <Tab eventKey={2} title="Questionários">
                   <QuestionariosContainer />
                 </Tab>
                 <Tab eventKey={3} title="Cupons">
                   <CuponsContainer />
                 </Tab>
                 <Tab eventKey={4} title="Vouchers">
                  <VouchersContainer />
                 </Tab>
                 <Tab eventKey={5} title="Respostas">
                   {/*<RespostasContainer />*/}
                 </Tab>
               </Tabs>
             </Col>
           </Row>
         {/*</Grid>*/}

      </div>
    );
  }
}


export default createContainer(({ params: { id } }) => {
  const restauranteId = id
  console.log(restauranteId)
  const handle = Meteor.subscribe('restaurantes.single', { id: restauranteId });
  const restauranteReady = handle.ready();
  const restaurante = Restaurantes.findOne(restauranteId);
  return {
    restauranteReady,
    restaurante,
    restauranteId
  };
}, RestauranteContainer);
