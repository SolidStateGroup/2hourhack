const UpdateProfile = class extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			firstName: props.firstName,
			lastName: props.lastName
		};
	}

	componentWillReceiveProps(newProps) {
		if (newProps.firstName !== this.props.firstName || newProps.lastName !== this.props.lastName) {
			this.setState({
				firstName: newProps.firstName,
				lastName: newProps.lastName
			});
		}
	}

	handleSubmit = () => {
		FireAuth.update({
			firstName: this.state.firstName,
			lastName: this.state.lastName
		})
			.then(this.props.onSubmit)
			.catch((err)=> {
				this.setState({error: err.message});
			});
	}

	render() {
		return (
			<div>
				<InputGroup
					value={this.state.firstName}
					title="First Name"
					placeholder="Joe" type="text"
					onChange={(e)=>this.setState({firstName: Utils.safeParseEventValue(e)})}/>

				<InputGroup
					value={this.state.lastName}
					title="Last Name"
					placeholder="Blogs" type="text"
					onChange={(e)=>this.setState({lastName: Utils.safeParseEventValue(e)})}/>

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

UpdateProfile.propTypes = {
	onSubmit: OptionalFunc,
	firstName: OptionalString,
	lastName: OptionalString
};

module.exports = UpdateProfile;
