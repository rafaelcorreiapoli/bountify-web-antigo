import React, { PropTypes } from 'react'
import { insert } from '/imports/api/promocoes/methods'
import { Button } from 'react-bootstrap'
import t from 'tcomb-form'
import NotificationSystem from 'react-notification-system'
const FormSchema = t.struct({
  nome: t.String,
  descricao: t.String,
  validoAte: t.Date,
  imagemUrl: t.String,
  //backgroundUrl: t.String
})



class PromocoesAdd extends React.Component {
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
    const promocao = this.refs.form.getValue()
    if (!promocao) return
    const { notificationSystem } = this.refs
    const { id } = this.props.params
    console.log(id)
    promocao.restauranteId = id

    console.log(promocao)
    this.setState({
      callingMethod: true,
      value: promocao
    })
    insert.call({...promocao, restauranteId: id}, (err, res) => {
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
        const { nome } = promocao
        notificationSystem.addNotification({
          message: `Promoção ${nome} criada com sucesso.`,
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
        <h3>Criar nova Promoção</h3>
        <form onSubmit={this.onSubmit}>
          <t.form.Form ref="form" value={value} type={FormSchema}  />
          <div className="form-group">
            <Button type="submit" bsStyle="primary" disabled={callingMethod}>{callingMethod ? 'Carregando...' : 'Salvar'}</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default PromocoesAdd;
