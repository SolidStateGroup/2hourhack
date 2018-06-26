import LoginForm from './LoginRegisterForm';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';
import UpdateProfile from './UpdateProfile';

class TheComponent extends ES6Component {

	constructor(props, context) {
		super(props, context);
		this.state = {isLoading: true};
	}

	componentWillMount() {
		FireAuth.setup(this.onLogin, this.onUserChange, this.onLogout, () => {
			alert("Email verified!");
		}, this.onError);
	}

	onError = (err) => {
		alert(err);
	}

	onLogin = (user, profile) => {
		this.setState({
			isLoading: false,
			user,
			profile
		});
	};

	onUserChange = (user, profile) => {
		this.setState({
			user,
			profile
		});
	};

	onLogout = () => {
		this.setState({
			isLoading: false,
			user: null,
			profile: null
		});
	};

	showForgotPassword = () => {
		openCustomModal(
			<div className="modal-content">
				<div className="modal-header">
					<h3>Forgot Password</h3>,
				</div>
				<div className="modal-body">
					<ForgotPassword onSubmit={() => closeModal()}/>
				</div>
			</div>
		);
	};

	showChangePassword = () => {
		openModal(<h3>Change Password</h3>,
			<ChangePassword onSubmit={() => closeModal()}/>
		);
	};

	render() {
		return (
			<div>
				<h1>
					Simple Login Example
					<Tooltip place="right">
						fireAuth.init(onLogin, onUserChange, onLogout, onEmailVerified, onError)
					</Tooltip>
				</h1>
				{!this.state.profile ? (
					<div>
						<Row>
							<Button disabled={this.state.isLoading} onClick={() => FireAuth.facebookLogin()}>
								Facebook
							</Button>
							<Button disabled={this.state.isLoading} onClick={() => FireAuth.googleLogin()}>
								Google
							</Button>
						</Row>
						<Divider/>
						<LoginForm onRegister={(email, password) => FireAuth.register(email, password)}
								   onLogin={(email, password) => FireAuth.login(email, password)}/>
						<Divider/>
						<Button onClick={this.showForgotPassword} className="btn-link">
							Forgot password?
						</Button>
					</div>
				) : (
					<div>
						{!this.state.profile.emailVerified && (
							<div>
								<Button onClick={FireAuth.resendVerification}>
									Resend Verification Email
								</Button>
							</div>
						)}
						{ //todo: check if can set password
							<Button onClick={this.showChangePassword}>
								Change Password
							</Button>
						}

						<UpdateProfile onSubmit={this.onProfileUpdated} {...this.state.profile}/>

						<Button onClick={FireAuth.logout}>
							Logout
						</Button>
					</div>
				)}
			</div>
		);
	}
}

export default hot(module)(TheComponent)
