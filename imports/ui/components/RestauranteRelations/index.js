import React, { PropTypes } from 'react'
import { Tabs, Button, Tab} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import PromocoesContainer from '/imports/ui/containers/PromocoesContainer'
import QuestionariosContainer from '/imports/ui/containers/QuestionariosContainer'
import CuponsContainer from '/imports/ui/containers/CuponsContainer'
import VouchersContainer from '/imports/ui/containers/VouchersContainer'
import UsersContainer from '/imports/ui/containers/UsersContainer'
import GerarCupomContainer from '/imports/ui/containers/GerarCupomContainer'
const RestauranteRelations = ({
  restauranteId
}) => {
  return (
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="Promoções">
        <PromocoesContainer restauranteId={restauranteId} />
        <LinkContainer style={{marginTop: 20}} to={`/restaurante/${restauranteId}/promocoes/add`}>
           <Button bsStyle="primary" className="btn-fill"> Criar Promoção</Button>
        </LinkContainer>
      </Tab>
      <Tab eventKey={2} title="Questionários">
        <QuestionariosContainer restauranteId={restauranteId} />
        <LinkContainer style={{marginTop: 20}} to={`/restaurante/${restauranteId}/questionarios/add`}>
           <Button bsStyle="primary" className="btn-fill"> Criar Questionário</Button>
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
      <Tab eventKey={6} title="Usuários">
        <UsersContainer restauranteId={restauranteId} />
          <LinkContainer style={{marginTop: 20}} to={`/restaurante/${restauranteId}/users/add`}>
             <Button bsStyle="primary" className="btn-fill">Novo Usuário</Button>
          </LinkContainer>
      </Tab>
    </Tabs>
  )
}

export default RestauranteRelations
