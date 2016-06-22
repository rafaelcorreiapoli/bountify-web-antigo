import React, { PropTypes } from 'react'
import { Link } from 'react-router'
const NavBar = (props) => {
  return (
    <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a href="../" className="navbar-brand">Bountify</a>
          <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse" id="navbar-main">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to='/restaurantes'>Restaurantes</Link>
            </li>
            <li>
              <Link to='/usuarios'>Usuários</Link>
            </li>
            <li>
              <Link to='/vouchers'>Vouchers</Link>
            </li>
            <li>
              <Link to='/promocoes'>Promoções</Link>
            </li>
            <li>
              <Link to='/questionarios'>Questionários</Link>
            </li>
            <li>
              <Link to='/cupons'>Cupons</Link>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="../help/">Logout</a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default NavBar
