/**
 * Created by kylejohnson on 21/08/2016.
 */
import InfiniteLoadingList from '../../base/InfiniteLoadingList';

const TheComponent = class extends React.Component {
	displayName: 'TheComponent'

	constructor(props, context) {
		super(props, context);
		this.state = {
			data: this.generateData(),
			infiniteData: this.generateData(),
			loading: false
		};
	}

	generateData(offset = 0) {
		var data = [];
		for (var i = 0; i < 100; i++) {
			var str = "This is row " + (offset + i + 1);
			if (Math.random() < 0.5) {
				str += '\nExtra additional line';
			}
			if (Math.random() < 0.5) {
				str += "\n2nd extra additional line";
			}
			data.push(str);
		}
		return data;
	}

	renderListRow = (row) => (
		<div style={styles.row}>{row}</div>
	)

	renderInfiniteListRow = (row) => (
		<div style={styles.row}>{row}</div>
	)

	loadNextPage = () => {
		console.log('loading next page');
		this.setState({infiniteData: this.state.infiniteData.concat(this.generateData(this.state.infiniteData.length))});
	}

	render() {
		return (
			<div className="app-container container">
				<div>
					<h1>Dynamic row height list</h1>
					<ListView
						ref="listview"
						data={this.state.data}
						renderRow={this.renderListRow}
						containerHeight={400}
					/>
					<Button
						onClick={() => {
							var data = this.state.data;
							data[0] += "\nAdded line from button";
							this.setState({data});
						}}
					>
						Add line to row 1
					</Button>

				</div>
				<div>
					<h1>Table</h1>
					<BigDataExample />
				</div>
				<div>
					<h1>Infinite Loading List</h1>
					<InfiniteLoadingList
						hasNextPage={true}
						isNextPageLoading={this.state.loading}
						data={this.state.infiniteData}
						loadNextPage={this.loadNextPage}
						renderRow={this.renderInfiniteListRow}
					/>
				</div>
			</div>
		);
	}
};

const styles = {
	row: {
		border: 'thin black solid',
		borderRadius: 5,
		whiteSpace: 'pre-wrap',
		padding: 5,
		margin: 5
	}
}

TheComponent.propTypes = {};

module.exports = TheComponent;
