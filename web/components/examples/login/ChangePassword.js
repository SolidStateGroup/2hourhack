const ChangePassword = class extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	handleSubmit = () => {
		FireAuth.updatePassword(this.state.password)
			.then(this.props.onSubmit)
			.catch((err)=> {
				this.setState({error: err.message});
			});
	}

	render() {
		return (
			<div>
				<InputGroup
					title="Password"
					placeholder="****" type="password"
					onChange={(e)=>this.setState({password: Utils.safeParseEventValue(e)})}/>

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

ChangePassword.propTypes = {
	onSubmit: RequiredFunc
};

module.exports = ChangePassword;
