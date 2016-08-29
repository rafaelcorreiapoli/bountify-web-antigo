import React, { PropTypes } from 'react'
import { Panel, ListGroup, ListGroupItem, Image } from 'react-bootstrap'

const RestauranteCard = ({
  nome,
  logoUrl,
  categoria
}) => {
  return (
    <Panel collapsible defaultExpanded header={nome}>
      <Image src={logoUrl} responsive style={{margin: 'auto'}}/>
      <ListGroup fill>
        <ListGroupItem><i className="fa fa-list-alt" /> <i>{categoria}</i></ListGroupItem>
      </ListGroup>
    </Panel>
  )
}

export default RestauranteCard
