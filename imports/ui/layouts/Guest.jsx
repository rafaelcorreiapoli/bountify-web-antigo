import React from 'react';

export default class Guest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<h1>Hi Guest</h1>
      	{this.props.children}
      </div>
    );
  }
}
