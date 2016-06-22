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

	handleToggle() {
		this.setState({open: !this.state.open});
	}
	handleClose() {
		this.setState({open: false});
	}

	render() {
    const { children } = this.props
		return (
      <div>
        Testesssdsadas
        <button className='btn btn-primary'>Bustton</button>
        {children}
      </div>
		);
	}
}
