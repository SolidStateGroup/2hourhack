import React, {Component, PropTypes} from 'react';
import AccountStore from '../stores/account-store';

const TheComponent = class extends Component {
	displayName: 'TheComponent'

	constructor(props, context) {
		super(props, context);
		this.state = {
			isLoading: AccountStore.isLoading,
			user: AccountStore.getUser()
		};
	}

	componentDidMount() {
		ES6Component(this);
		this.listenTo(AccountStore, 'change', () => {
			this.setState({
				isLoading: AccountStore.isLoading,
				isSaving: AccountStore.isSaving,
				user: AccountStore.getUser(),
				error: AccountStore.error,
			});
		});

		this.listenTo(AccountStore, 'loaded', () => {
			this.props.onLogin && this.props.onLogin();
		})

		this.listenTo(AccountStore, 'saved', () => {
			this.props.onSave && this.props.onSave(AccountStore.savedId);
		});

		this.listenTo(AccountStore, 'logout', () => {
			this.setState({
				isLoading: false,
				isSaving: false,
				organisation: AccountStore.getOrganisation(),
				user: AccountStore.getUser()
			});
			this.props.onLogout && this.props.onLogout();
		});
		this.listenTo(AccountStore, 'problem', () => {
			this.setState({
				isLoading: AccountStore.isLoading,
				isSaving: AccountStore.isSaving,
				error: AccountStore.error
			})
		});
	}


	login = (details) => {
		AppActions.login(details)
	};

	loginDemo = () => {
		AppActions.login(Project.demoAccount)
	};

	register = (details,isInvite) => {
		AppActions.register(details,isInvite)
	};

	render() {
		var {isLoading, isSaving, user, organisation, error} = this.state
		return (
			this.props.children({
				isLoading,
				isSaving,
				user,
				organisation,
				error
			}, {
				login: this.login,
				register: this.register,
			})
		);
	}
};

TheComponent.propTypes = {};

module.exports = TheComponent;
