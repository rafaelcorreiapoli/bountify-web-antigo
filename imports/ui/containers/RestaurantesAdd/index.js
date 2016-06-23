import React, { PropTypes } from 'react'
import { insert } from '/imports/api/restaurantes/methods'
import { Button } from 'react-bootstrap'
import t from 'tcomb-form'
import NotificationSystem from 'react-notification-system'
const FormSchema = t.struct({
  nome: t.String,
  categoria: t.String,
  lat: t.Number,
  lng: t.Number,
  logoUrl: t.String
})



class RestaurantesAdd extends React.Component {
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
    console.log('clearing...')
    this.setState({
      value: null
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const restaurante = this.refs.form.getValue()
    console.log(restaurante)
    if (!restaurante) return
    const { notificationSystem } = this.refs


    this.setState({
      callingMethod: true,
      value: restaurante
    })
    insert.call(restaurante, (err, res) => {
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
        const { nome } = restaurante
        notificationSystem.addNotification({
          message: `Restaurante ${nome} criado com sucesso.`,
          level: 'success'
        });
      }
    })


  }


  render () {
    const { callingMethod, value } = this.state
    console.log(value)
    return (
      <div>
        <NotificationSystem ref="notificationSystem" />
        <h3>Criar novo Restaurante</h3>
        <form onSubmit={this.onSubmit}>
          <t.form.Form ref="form" value={value} type={FormSchema} options={{disabled: callingMethod}} />
          <div className="form-group">
            <Button type="submit" bsStyle="primary" disabled={callingMethod}>{callingMethod ? 'Carregando...' : 'Salvar'}</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default RestaurantesAdd;
