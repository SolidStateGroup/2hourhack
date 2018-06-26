const ForgotPassword = class extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	handleSubmit = () => {
		FireAuth.resetPassword(this.state.email)
			.then(this.props.onSubmit)
			.catch((err)=> {
				this.setState({error: err.message});
			});
	}

	render() {
		return (
			<div>
				<InputGroup
					title="Email"
					placeholder="email" type="email"
					onChange={(e)=>this.setState({email: Utils.safeParseEventValue(e)})}/>

				{this.state.error && (
					<div className="alert alert-danger">{this.state.error}</div>
				)}
				<Button onClick={this.handleSubmit}>
					Send
				</Button>
			</div>
		);
	}
};

ForgotPassword.propTypes = {
	onSubmit: RequiredFunc
};

module.exports = ForgotPassword;
