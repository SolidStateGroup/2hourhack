import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import data from './country-data';

const SortableItem = SortableElement(({value}) => <div style={{backgroundColor: 'white', cursor: 'pointer'}}><Button
	className="btn-link">{value}</Button><Divider/></div>);

const SortableList = class extends React.Component {
	displayName: 'SortableList'

	forceUpdateGrid() {
		this.refs.list.forceUpdateGrid();
	}

	render() {
		const {data, renderRow} = this.props;
		var element = null;
		SortableContainer(({data, renderRow, ref}) => {
			element = (
				<ListView ref={ref} renderRow={renderRow} containerHeight={200} rowHeight={40} data={data}/>
			);
		});
		return element;
	}

};

SortableList.propTypes = {
	data: OptionalArray,
	renderRow: RequiredFunc
};

module.exports = SortableList;

class SortableComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {data: data.concat([])};
	}

	onSortEnd = ({oldIndex, newIndex}) => {
		this.setState({
			data: arrayMove(this.state.data, oldIndex, newIndex)
		}, this.refs.list.forceUpdateGrid);
	};

	renderRow = (data, index) => (
		<SortableItem onSortEnd={this.onSortEnd} key={data.name} index={index} value={data.name}/>
	)

	render() {
		return (
			<SortableList ref="list" data={this.state.data} renderRow={this.renderRow} onSortEnd={this.onSortEnd}/>
		);
	}
}

module.exports = SortableComponent;
