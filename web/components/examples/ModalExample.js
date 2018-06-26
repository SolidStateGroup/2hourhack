/**
 * Created by kylejohnson on 24/07/2016.
 */

module.exports = class extends React.Component {

	openModal = () => {
		openModal(<h3>Title</h3>, <div>Hey</div>);
	}

	openConfirm = () => {
		openConfirm(<h3>Title</h3>, <h3>Body</h3>, () => alert("Yes"), () => alert("No"));
	}

	render() {
		return (
			<div>
				<h1>
					Simple Modal Example
					<Tooltip place="right">
						openModal(title, body)
					</Tooltip>
				</h1>

				<FormInline>
					<Button onClick={this.openModal}>
						Modal
					</Button>
					<Button onClick={this.openConfirm}>
						Confirm
					</Button>
				</FormInline>
			</div>
		);
	}
};
