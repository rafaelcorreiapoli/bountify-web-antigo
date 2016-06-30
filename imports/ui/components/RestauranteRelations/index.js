import React, { PropTypes } from 'react'
import { Tabs, Button, Tab} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import PromocoesContainer from '/imports/ui/containers/PromocoesContainer'
import QuestionariosContainer from '/imports/ui/containers/QuestionariosContainer'
import CuponsContainer from '/imports/ui/containers/CuponsContainer'
import VouchersContainer from '/imports/ui/containers/VouchersContainer'
import GerarCupomContainer from '/imports/ui/containers/GerarCupomContainer'
const RestauranteRelations = ({
  restauranteId
}) => {
  console.log(restauranteId)
  return (
    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="Promoções">
        <PromocoesContainer restauranteId={restauranteId} />
        <LinkContainer to={`/restaurante/${restauranteId}/promocoes/add`}>
           <Button bsStyle="primary"> Criar Promoção</Button>
        </LinkContainer>
      </Tab>
      <Tab eventKey={2} title="Questionários">
        <QuestionariosContainer restauranteId={restauranteId} />
        <LinkContainer to={`/restaurante/${restauranteId}/questionarios/add`}>
           <Button bsStyle="primary"> Criar Questionário</Button>
        </LinkContainer>
      </Tab>
      <Tab eventKey={3} title="Cupons">
        <CuponsContainer />
        <GerarCupomContainer restauranteId={restauranteId} />
      </Tab>
      <Tab eventKey={4} title="Vouchers">
       <VouchersContainer />
      </Tab>
      <Tab eventKey={5} title="Respostas">
        {/*<RespostasContainer />*/}
      </Tab>
    </Tabs>
  )
}

export default RestauranteRelations
