import React from 'react';
import AccountsUIWrapper from '/imports/ui/components/accounts_ui_wrapper/AccountsUIWrapper';

const containerStyle = {
	width: '50%',
	margin: 'auto'
};

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={containerStyle}>
      	 <AccountsUIWrapper />
      </div>
    );
  }
}
