import React, { Component } from 'react';
import Footer from '/imports/ui/components/footer/Footer.jsx';
import NavBar from '/imports/ui/components/NavBar'
import { Grid } from 'react-bootstrap'
import NotificationSystem from 'react-notification-system'

import Sidebar from '/imports/ui/components/Sidebar'
const styles = {
	container: {
		//margin: 50
		//marginTop: 100
	}
};

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	handleToggle() {
		this.setState({open: !this.state.open});
	}
	handleClose() {
		this.setState({open: false});
	}

	render() {
		const { children } = this.props

		return (
			<div className="wrapper">
				<NavBar />
				<Grid fluid={true}>
					{children}
				</Grid>
			</div>
		);
	}
}
