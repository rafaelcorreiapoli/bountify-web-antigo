import React, { PropTypes } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { NavItem } from 'react-bootstrap'

const SidebarItem = ({
  to,
  label,
  icon,
  eventKey
}) => {
  return (
    <LinkContainer to={to}>
      <NavItem eventKey={eventKey}>
        <i className={icon}></i>
        <p>{label}</p>
      </NavItem>
    </LinkContainer>
  )
}
const Sidebar = (props) => {
  return (
    <div className="sidebar" data-color="red">
      <div className="sidebar-wrapper">
        <div className="logo">
          <a href="#" className="simple-text">
            BOUNTIFY
          </a>
        </div>

        <ul className="nav">
          <SidebarItem to="restaurantes" label="Restaurantes" icon="fa fa-user" eventKey={1} />
          <SidebarItem to="promocoes" label="Promoções" icon="fa fa-star" eventKey={2} />
          <SidebarItem to="vouchers" label="Vouchers" icon="fa fa-gift" eventKey={3} />
          <SidebarItem to="questionarios" label="Questionários" icon="fa fa-list-ol" eventKey={4} />
          <SidebarItem to="cupons" label="Cupons" icon="fa fa-qrcode" eventKey={5} />
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
