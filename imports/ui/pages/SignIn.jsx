import React from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

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
      	 <Blaze template="atForm" state={'signIn'} />
      </div>
    );
  }
}
