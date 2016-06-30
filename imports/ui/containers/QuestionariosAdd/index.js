import React, { PropTypes } from 'react'
import { insert } from '/imports/api/questionarios/methods'
import { Button } from 'react-bootstrap'
import t from 'tcomb-form'
import NotificationSystem from 'react-notification-system'
import { TIPOS_PERGUNTA } from '/imports/api/perguntas/schema'

const Widgets = t.enums({
  [TIPOS_PERGUNTA.TEXT]: 'Text',
  [TIPOS_PERGUNTA.CHECKBOX]: 'Checkbox',
  [TIPOS_PERGUNTA.SELECT]: 'Select',
  [TIPOS_PERGUNTA.SLIDER]: 'Slider',
  [TIPOS_PERGUNTA.IMAGE_SELECT]: 'Image Select'
})
const Tipos = t.enums({
  array: 'Array',
  number: 'Number',
  string: 'String',
  date: 'Date'
})

const BaseWidget = t.struct({
  titulo: t.String,
  tipo: Tipos,
  widget: Widgets,
})

const TextWidget = BaseWidget.extend({
  config: t.struct({
    maxLength: t.Number
  })
})
const SliderWidget = BaseWidget.extend({
  config: t.struct({
    minValue: t.Number,
    maxValue: t.Number,
    step: t.Number
  })
})

const Option = t.struct({
  value: t.String,
  label: t.String
})

const CheckboxWidget = BaseWidget.extend({
  config: t.struct({
    opcoes: t.list(Option),
    minLength: t.Number,
    maxLength: t.Number
  })
})

const RatingWidget = BaseWidget.extend({
  config: t.struct({
    maxValue: t.Number,
    icon: t.String,
  })
})

const ImageSelectWidget = BaseWidget.extend({
  config: t.struct({
    opcoes: t.list(Option)
  })
})

const SelectWidget = BaseWidget.extend({
  config: t.struct({
    opcoes: t.list(Option)
  })
})

const Widget = t.union([TextWidget, SliderWidget, CheckboxWidget, RatingWidget, ImageSelectWidget])

Widget.dispatch = (value) => {
  widget = value && value.widget ? value.widget : TIPOS_PERGUNTA.TEXT

  switch(widget) {
    case TIPOS_PERGUNTA.TEXT:
    return TextWidget
    case TIPOS_PERGUNTA.CHECKBOX:
    return CheckboxWidget
    case TIPOS_PERGUNTA.RATE:
    return SliderWidget
    case TIPOS_PERGUNTA.SELECT:
    return SelectWidget
    case TIPOS_PERGUNTA.IMAGE_SELECT:
    return SelectWidget
  }
}

const Type = t.struct({
  nome: t.String,
  perguntas: t.list(Widget) // a list of strings
});

const options = {

  fields: {
    perguntas: {
      item: {
        config: {
          horizontal: {
            md: [3, 9],
            sm: [6, 6]
          }
        },
        fields: {
          config: {
            fields: {
              opcoes: {
                disableOrder: true
              }
            }
          },
          tipo: {
            nullOption: false,
            factory: t.form.Radio
          }
        }
      }

    }
  }
}


class QuestionariosAdd extends React.Component {
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
    const input = this.refs.form.getValue()
    console.log(input)
    if (!input) return
    const { notificationSystem } = this.refs
    const { id } = this.props.params

    const questionario = {
      nome: input.nome,
      restauranteId: id
    }
    const { perguntas } = input
    console.log(perguntas)
    this.setState({
      callingMethod: true,
      value: input
    })
    insert.call({questionario, perguntas}, (err, res) => {
      //this.clearForm();
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
        const { nome } = questionario
        notificationSystem.addNotification({
          message: `Questionário ${nome} e perguntas criadas com sucesso.`,
          level: 'success'
        });
      }
    })


  }


  render () {
    const { callingMethod, value } = this.state
    return (
      <div>
        <NotificationSystem ref="notificationSystem" />
        <h3>Criar novo Questionário</h3>
        <div className="form-horizontal">
          <form onSubmit={this.onSubmit}>
            <t.form.Form ref="form" value={value} type={Type} options={options} />
            <div className="form-group">
              <Button type="submit" bsStyle="primary" disabled={callingMethod}>{callingMethod ? 'Carregando...' : 'Salvar'}</Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default QuestionariosAdd;
