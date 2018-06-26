/**
 * Created by kylejohnson on 21/08/2016.
 */

const TheComponent = class extends React.Component {
	displayName: 'TheComponent'

	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	render() {
		return (
			<div className="app-container container">
				<h1>How it works</h1>

				<p>If you’re familiar with modifying variables in Sass—or any other CSS preprocessor—you’ll be right at
					home to move into flexbox mode.</p>

				<ol>
					<li>Open the <code className="highlighter-rouge">_variables.scss</code> file and find the <code
						className="highlighter-rouge">$enable-flex</code> variable.
					</li>
					<li>Change it from <code className="highlighter-rouge">false</code> to <code
						className="highlighter-rouge">true</code>.
					</li>
					<li>Recompile, and done!</li>
				</ol>

				<h1>
					Row
				</h1>
				<Row className="list-group" space>
					<span className="list-group-item">Space 1</span>
					<span className="list-group-item">Space 2</span>
				</Row>
				<Row className="list-group">
					<span className="list-group-item">Span 1</span>
					<Flex style={{backgroundColor: '#eee'}} className="list-group-item centered-container">Flex</Flex>
					<span className="list-group-item">Span 2</span>
				</Row>

				<h1>
					Grid
				</h1>
				<div className="row list-group">
					<div className="list-group-item col-md-6 col-xs-12">
						col-md-6 col-xs-12
					</div>
					<div className="list-group-item col-md-6 col-xs-12">
						col-md-6 col-xs-12
					</div>
				</div>

				<h1>
					Responsive Ordering
				</h1>
				<div className="row list-group">
					<div className="list-group-item order-example col-md-6 col-xs-12 col-md-order-1 col-xs-order-2">
						col-md-order-1 col-xs-order-2
					</div>
					<div className="list-group-item order-example col-md-6 col-xs-12 col-md-order-2 col-xs-order-1">
						col-md-order-2 col-xs-order-1
					</div>
				</div>

				<h1>Responsive flexbox</h1>

				<div className="row list-group">
					<div className="col-xs-12 col-sm-6 list-group-item">
						1 of 2 (stacked on mobile)
					</div>
					<div className="col-xs-12 col-sm-6 list-group-item">
						1 of 2 (stacked on mobile)
					</div>
				</div>

				<h1>Equal Height columns</h1>

				<p>When we activate Flexbox it will automatically convert each of the columns into flex items matching
					the heights of columns. The entire grid system (mixins and predefined classes), switch from floats
					to display: flex;.</p>

				<div className="row list-group">

					<div className="col-lg-3 list-group-item">
						<h3>Item 1</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>

					<div className="col-lg-3 list-group-item">
						<h3>Item 2</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>

					<div className="col-lg-3 list-group-item">
						<h3>Item 3</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. </p>
					</div>

					<div className="col-lg-3 list-group-item">
						<h3>Item 4</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>

					<div className="col-lg-3 list-group-item">
						<h3>Item 5</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. </p>
					</div>

					<div className="col-lg-3 list-group-item">
						<h3>Item 6</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>

					<div className="col-lg-3 list-group-item">
						<h3>Item 7</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. </p>
					</div>

					<div className="col-lg-3 list-group-item">
						<h3>Item 8</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>
				</div>

				<h1>Auto-layout columns</h1>

				<div className="row list-group">
					<div className="col-md col-xs-12 list-group-item">
						1 of 2
					</div>
					<div className="col-md col-xs-12 list-group-item">
						1 of 2
					</div>
				</div>
				<div className="row list-group">
					<div className="col-xs list-group-item">
						1 of 3
					</div>
					<div className="col-xs list-group-item">
						1 of 3
					</div>
					<div className="col-xs list-group-item">
						1 of 3
					</div>
				</div>

				<div>
					<h1>Row</h1>
					<Row className="list-group">
						<Flex className="list-item centered-container">
							<h2>Flex 1</h2>
						</Flex>
						<Flex value={2} className="list-item centered-container">
							<h2>Flex 2</h2>
						</Flex>
						<Flex value={3} className="list-item centered-container">
							<h2>Flex 3</h2>
						</Flex>
					</Row>
					<h1>Row space=true</h1>
					<Row space={true}>
						<div className="centered-container">
							<h2>1</h2>
						</div>
						<div className="centered-container">
							<h2>2</h2>
						</div>
					</Row>

					<div className="row centered-container">

						<div className="col-md-6 col-xs-12">
							<FormGroup>
								<Panel title={"Longer Half"}>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac odio viverra
										nulla
										viverra feugiat a
										in
										neque. Aliquam pulvinar urna diam, sit amet congue ligula ultricies quis.
										Pellentesque vestibulum
										felis
										et
										eros egestas dignissim. Pellentesque iaculis fringilla lectus vitae rutrum.
										Suspendisse eget viverra
										neque, commodo dapibus lacus. Pellentesque non enim lorem. Pellentesque vel
										facilisis sapien, nec
										hendrerit lorem. Quisque iaculis eros lacinia, gravida elit sollicitudin, tempor
										turpis.
									</p>
								</Panel>
							</FormGroup>
						</div>

						<div className="col-md-6 col-xs-12">
							<FormGroup>
								<Panel title={"Shorter Half"}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</Panel>
							</FormGroup>
						</div>

					</div>
				</div>
			</div>
		);
	}
};

TheComponent.propTypes = {};

module.exports = TheComponent;
