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
				<Sidebar />

				<div className="main-panel">
					<nav className="navbar navbar-default navbar-fixed">
						<div className="container-fluid">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a className="navbar-brand" href="#">Dashboard</a>
							</div>
							<div className="collapse navbar-collapse">
								<ul className="nav navbar-nav navbar-left">
									<li>
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">
											<i className="fa fa-dashboard"></i>
										</a>
									</li>
								</ul>

								<ul className="nav navbar-nav navbar-right">
									<li>
										<a href="">
											Account
										</a>
									</li>


								</ul>
							</div>
						</div>
					</nav>

					<div className="content">
							<div className="container-fluid">
									<div className="row">
										{children}
									</div>
							</div>
					</div>

					<footer className="footer">
							<div className="container-fluid">
									<nav className="pull-left">
											<ul>
													<li>
															<a href="#">
																	Home
															</a>
													</li>

											</ul>
									</nav>
									<p className="copyright pull-right">
											&copy; 2016 <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
									</p>
							</div>
					</footer>
				</div>
			</div>
			);
		}
	}
