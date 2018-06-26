/**
 * Created by kylejohnson on 31/07/2016.
 */
import Highlighter from '../base/Highlighter';
import AutoComplete from '../base/Autocomplete';

import data from './country-data';

const NavigableList = class extends React.Component {
	displayName: 'NavigableList'

	constructor(props, context) {
		super(props, context);
		this.state = {data: data, isAbsolute: false};
	}

	selectRow = (data) => {
		openConfirm(<h3>Your Selection</h3>,
			<div>Are you sure you want to select {data.name}?</div>);
	}

	search = (e) => { //simple search
		const search = Utils.safeParseEventValue(e).toLowerCase();
		this.setState({
			search,
			data: data.filter((item)=> (
				item.name.toLowerCase().indexOf(search) > -1
			))
		}, this.refs.autocomplete.forceUpdateGrid);
	}

	renderRow = (row, index, selectedRow, highlightRow) => {
		const isSelected = selectedRow === index;
		return (
			<div onMouseOver={()=>highlightRow(index)}>
				<Row space>
					<Button onMouseDown={()=> debugger && this.selectRow(row)}
							className={"btn-link " + (!isSelected ? "btn-link-secondary" : "")}>
						{isSelected ? row.name : <Highlighter search={this.state.search} value={row.name}/>}
					</Button>
					{row.code}
				</Row>
			</div>
		);
	}

	onAbsoluteChanged = (isAbsolute) => this.setState({isAbsolute})

	render() {
		const inputProps = {
			className: "full-width",
			onChange: this.search,
			placeholder: 'Search'
		};
		return (
			<div>
				<h2>
					Navigable List
					<Tooltip place="right">
						Uses the input step through + ListView + FocusMonitor
					</Tooltip>
				</h2>
				Show as popover ?
				<Switch value={this.state.isAbsolute} onChange={this.onAbsoluteChanged}/>
				<AutoComplete
					ref="autocomplete"
					inputProps={inputProps}
					onChange={this.search}
					onSelect={this.selectRow}
					renderRow={this.renderRow}
					isAbsolute={this.state.isAbsolute}
					data={this.state.data}/>
			</div>
		);
	}
};

NavigableList.propTypes = {};

module.exports = NavigableList;
