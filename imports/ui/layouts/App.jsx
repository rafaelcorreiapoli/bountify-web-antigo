import React, { Component } from 'react';
import Menu from '/imports/ui/components/menu/Menu.jsx';
import {pinkA700} from 'material-ui/styles/colors';
import Footer from '/imports/ui/components/footer/Footer.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from 'react-router';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: pinkA700,
  },
  appBar: {
    height: 50,
  },
});

const styles = {
	content: {
		margin: 50
	}
};

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
	}

	componentWillReceiveProps(nextProps) {
		let title;
		switch (nextProps.location.pathname) {
			case '/restaurantes':
				title = 'Restaurantes';
				break;
			case '/requests':
				title = 'Requests';
				break;
			case '/restaurantes/add':
				title = 'Adicionar Restaurante';
				break;	
			default:
				title = 'Unknown';
		}

		this.setState({
			title
		});
	}

	handleToggle() {
		this.setState({open: !this.state.open});
	}
	handleClose() {
		this.setState({open: false});
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()	}>
				<div>
				  <AppBar
				    title={this.state.title}
				    iconClassNameRight="muidocs-icon-navigation-expand-more"
				    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
				  />		
	        <Drawer
	        	open={this.state.open}
	        	docked={false}
	        	onRequestChange={(open) => this.setState({open})}>
	        	<Link to="/requests">
		          <MenuItem
		          	onTouchTap={this.handleClose.bind(this)}>
		          	Requests
		          </MenuItem>
	          </Link>
	        	<Link to="/restaurantes">
		          <MenuItem
		          	onTouchTap={this.handleClose.bind(this)}>
		          	Restaurantes
		          </MenuItem>
	          </Link>
	        </Drawer>
				  <div style={styles.content}>
						{this.props.children}
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}
