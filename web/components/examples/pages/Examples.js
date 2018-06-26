import React, {Component} from 'react';
import {Link} from 'react-router';

export default class ExampleOne extends Component {
	render() {
		return (
			<div className="app-container">
				<nav className="navbar navbar-static-top navbar-dark bg-inverse">
					<a className="navbar-brand" href="#">Project name</a>
					<ul className="nav navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Contact</a>
						</li>
					</ul>
				</nav>

				<div className="jumbotron">
					<div className="container">
						<h1 className="display-3">Hello, world!</h1>
						<p>This is a template for a simple marketing or informational website. It includes a large
							callout called a jumbotron and three supporting pieces of content. Use it as a starting
							point to create something more unique.</p>
						<p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md">
							<h2>Heading</h2>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
								commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam
								porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
							<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
						</div>
						<div className="col-md">
							<h2>Heading</h2>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
								commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam
								porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
							<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
						</div>
						<div className="col-md">
							<h2>Heading</h2>
							<p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
								Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus
								commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
							<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
						</div>
					</div>
				</div>

			</div>
		);
	}
}
