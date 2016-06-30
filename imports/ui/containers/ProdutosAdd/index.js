import React, { PropTypes } from 'react'
import { insert } from '/imports/api/produtos/methods'
import { Button } from 'react-bootstrap'
import t from 'tcomb-form'
import NotificationSystem from 'react-notification-system'
const FormSchema = t.struct({
  nome: t.String,
  imagemUrl: t.String,
  desconto: t.Number,
  observacao: t.maybe(t.String)
})



class ProdutosAdd extends React.Component {
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
    const produto = this.refs.form.getValue()
    if (!produto) return
    const { notificationSystem } = this.refs
    const { promocaoId } = this.props
    produto.promocaoId = promocaoId

    console.log(promocaoId)
    console.log(produto)

    this.setState({
      callingMethod: true,
      value: produto
    })
    insert.call({...produto, promocaoId}, (err, res) => {
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
        const { nome } = produto
        notificationSystem.addNotification({
          message: `Produto ${nome} criado com sucesso.`,
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
        <h3>Criar novo Produto</h3>
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

export default ProdutosAdd;
