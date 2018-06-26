const InfiniteScrollExample = class extends React.Component {
	displayName: 'InfiniteScrollExample'

	constructor(props, context) {
		super(props, context);
		this.state = {
			data: _.range(0, 100).map((num) => ({key: num, height: this.getRandomHeight()})),
			randomRowHeights: false,
		};
	}

	getRandomHeight() {
		return Math.round(Math.random() * 60 + 40);
	}

	loadMore = () => {
		this.setState({
			isLoading: true,
		});
		setTimeout(()=> {
			const length = this.state.data.length;
			this.setState({
				isLoading: false,
				data: this.state.data.concat(_.range(length, length + 100)
					.map((num) => ({key: num, height: this.getRandomHeight()})))
			});
		}, 2000);
	}

	addToBottom = () => {
		let data = this.state.data.slice(0);
		data.unshift({key: data.length, height: this.getRandomHeight()});
		this.setState({data});
		if (this.infiniteScroll) {
			this.infiniteScroll.adjustScrollPos(this.state.randomRowHeights ? data.height * -1 : -40);
		}
	}

	rowHeight = ({index}) => {
		if (!this.state.randomRowHeights) {
			return 40;
		}

		return index < this.state.data.length ? this.state.data[index].height : 40;
	}

	onRandomRowHeightsChanged = (randomRowHeights) => {
		// @TODO Two updates happening here.. recomputeRowHeights() calls forceUpdate()
		this.setState({randomRowHeights});
		this.virtualScroll.recomputeRowHeights();
	}

	renderRow(data) {
		return (
			<div className=".FlexTable__row" key={data.key}>
				Row {data.key + 1}
			</div>
		);
	}

	render() {
		return (
			<div>
				<h2>
					Async Infinite scroll {this.props.reverse && '(reversed)'}
					<Tooltip place="right">
						Performant {this.props.reverse && 'reverse'} infinite scroll
					</Tooltip>
				</h2>
				<InfiniteScroll
					renderLoading={(
						<div style={{height: 40}}>
							Loading...
						</div>
					)}
					rowHeight={this.rowHeight}
					containerHeight={200}
					threshold={50}
					data={this.state.data}
					isLoading={this.state.isLoading}
					loadMore={this.loadMore}
					renderRow={this.renderRow}
					ref={(infiniteScroll) => this.infiniteScroll = infiniteScroll}
					scrollRef={(virtualScroll) => this.virtualScroll = virtualScroll}
					reverse={this.props.reverse}
				/>
				{this.props.reverse && <Button onClick={this.addToBottom}>Add Row to Bottom</Button>}
				Use random row heights ?
				<Switch value={this.state.randomRowHeights} onChange={this.onRandomRowHeightsChanged}/>
			</div>
		);
	}
};

InfiniteScrollExample.propTypes = {
	reverse: OptionalBool
}

InfiniteScrollExample.defaultProps = {
	reverse: false
}

module.exports = InfiniteScrollExample;
