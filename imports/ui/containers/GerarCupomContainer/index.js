import React, { PropTypes } from 'react'
import { insert } from '/imports/api/cupons/methods'
import { Button } from 'react-bootstrap'
import NotificationSystem from 'react-notification-system'

class GerarCupomContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { restauranteId } = this.props
    const { notificationSystem } = this.refs

    console.log(restauranteId)
    insert.call({ restauranteId }, (err, res) => {
      if (err) {
        notificationSystem.addNotification({
          message: `Algum erro ocorreu ${err.reason}.`,
          level: 'error'
        });
      } else {
        console.log(res)
        const { token } = res
        notificationSystem.addNotification({
          message: `Cupom ${token} gerado com sucesso.`,
          level: 'success'
        });
      }

    })
  }

  render () {
    return (
      <div>
      <NotificationSystem ref="notificationSystem" />
      <Button style={{marginTop: 20}} bsStyle="primary" className="btn-fill" onClick={this.handleClick}> Gerar Cupom</Button>
      </div>
    )
  }
}

export default GerarCupomContainer;
