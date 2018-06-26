/**
 * Created by kylejohnson on 25/07/2016.
 */
const LoginForm = class extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	login = () => {
		this.props.onLogin(this.state.email, this.state.password);
	}

	register = () => {
		this.props.onRegister(this.state.email, this.state.password);
	}

	toggleLogin = () => {
		this.setState({showLogin: !this.state.showLogin});
	}

	render() {
		return this.state.showLogin ? (
			<div>
				<InputGroup
					title="Email"
					placeholder="email" type="email"
					onChange={(e)=>this.setState({email: Utils.safeParseEventValue(e)})}/>

				<InputGroup title="Password"
							placeholder="password" type="password"
							onChange={(e)=>this.setState({password: Utils.safeParseEventValue(e)})}/>

				<FormInline>
					<Button onClick={this.login}>Login</Button>
					<Button className="btn-link" onClick={this.toggleLogin}>New user ? </Button>
				</FormInline>
			</div>
		) : (
			<div>
				<InputGroup
					title="Email"
					placeholder="email" type="email"
					onChange={(e)=>this.setState({email: Utils.safeParseEventValue(e)})}/>

				<InputGroup title="Password"
							placeholder="password" type="password"
							onChange={(e)=>this.setState({password: Utils.safeParseEventValue(e)})}/>

				<FormInline>
					<Button onClick={this.register}>Register</Button>
					<Button className="btn-link" onClick={this.toggleLogin}>Already a member ? </Button>
				</FormInline>
			</div>
		);
	}
};

LoginForm.propTypes = {
	onLogin: RequiredFunc,
	onRegister: RequiredFunc
};

LoginForm.displayName = "LoginForm";

module.exports = LoginForm;
