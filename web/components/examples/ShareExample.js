/**
 * Created by kylejohnson on 24/07/2016.
 */

import Share from '../../apis/share/share';

module.exports = class extends React.Component {

	facebookShare = () => {
		Share.Facebook('https://solidstategroup.com');
	}

	twitterShare = () => {
		Share.Twitter('https://solidstategroup.com');
	}

	render() {
		return (
			<div>
				<h1>
					Simple Share Example
					<Tooltip place="right">
						Share.Twitter(url)
					</Tooltip>
				</h1>
				<FormInline>
					<Button onClick={this.facebookShare}>
						Facebook
					</Button>
					<Button onClick={this.twitterShare}>
						Twitter
					</Button>
				</FormInline>
			</div>
		);
	}
};
