import React, { PropTypes } from 'react'
import { invite } from '/imports/api/users/methods'
import { Button } from 'react-bootstrap'

import t from 'tcomb-form'
import NotificationSystem from 'react-notification-system'
const FormSchema = t.struct({
  email: t.String,
})

class UsersAdd extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)

    this.state = {
      callingMethod: false,
      value: null
    }
  }

  clearForm() {
    this.setState({
      value: null
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const data = this.refs.form.getValue()
    if (!data) return
    const { notificationSystem } = this.refs
    const restauranteId = this.props.params.id

    this.setState({
      callingMethod: true,
      value: data
    })

    const role = 'restaurante'
    const { email } = data
    console.log(email, restauranteId, role)
    invite.call({email, restauranteId, role }, (err, res) => {
      this.clearForm();
      this.setState({
        callingMethod: false
      })
      if (err) {
        console.log(err)
        notificationSystem.addNotification({
          message: `Algum erro ocorreu ${err.reason}.`,
          level: 'error'
        });
      } else {
        notificationSystem.addNotification({
          message: `Usuário ${email} convidado com sucesso.`,
          level: 'success'
        });
      }
    })
  }
  render() {
    const { callingMethod, value } = this.state
    return (
      <div>
        <NotificationSystem ref="notificationSystem" />
        <h3>Convidar novo usuário</h3>
        <form onSubmit={this.onSubmit}>
          <t.form.Form ref="form" value={value} type={FormSchema}  />
          <div className="form-group">
            <Button
              type="submit"
              bsStyle="primary"
              disabled={callingMethod}>
              {callingMethod ? 'Carregando...' : 'Salvar'}
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default UsersAdd;
