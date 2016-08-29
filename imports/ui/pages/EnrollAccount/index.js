import React, { PropTypes } from 'react'
import Blaze from 'meteor/gadicc:blaze-react-component';

class EnrollAccount extends React.Component {
  componentDidMount() {
    const { params: { token } } = this.props
    AccountsTemplates.paramToken = token
  }
  render() {
    return (
      <div>
        <Blaze template="atForm" state={'enrollAccount'} />
      </div>
    )
  }
}

export default EnrollAccount;
