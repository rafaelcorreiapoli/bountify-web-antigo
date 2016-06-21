import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import { IndexLink, Link } from 'react-router';

export default class Menu extends Component {
	onClickLogout(e) {
		e.preventDefault();
		AccountsTemplates.logout();
	}
  render() {
    return (
      <div>
				<ul>
					<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
					<li><Link to="/contacts" activeClassName="active">Contacts</Link></li>
					<li><Link to="/requests" activeClassName="active">Requests</Link></li>
					<li><Link to="/restaurantes" activeClassName="active">Restaurantes</Link></li>
					<li><a href="#" onClick={this.onClickLogout}>Logout</a></li>
				</ul>
				<hr />
			</div>
    );
  }
}
