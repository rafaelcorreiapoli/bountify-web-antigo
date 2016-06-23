import React, { PropTypes } from 'react'
import { Panel, ListGroup, ListGroupItem, Image } from 'react-bootstrap'

const RestauranteCard = ({
  nome,
  logoUrl,
  categoria
}) => {
  return (
    <Panel collapsible defaultExpanded header={nome}>
      <Image src={logoUrl} responsive />
      <ListGroup fill>
        <ListGroupItem>{categoria}</ListGroupItem>
      </ListGroup>
      Some more panel content here.
    </Panel>
  )
}

export default RestauranteCard
