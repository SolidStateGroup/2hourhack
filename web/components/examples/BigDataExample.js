import React from 'react';
import {Table, AutoSizer, Column, SortDirection} from 'react-virtualized';
const size = 100000;
var list = _.range(0, size).map(function (i) {
	return {id: i + 1, description: Utils.GUID()};
}).reverse();

module.exports = class extends React.Component {
	displayName = 'HomePage';

	constructor(props, context) {
		super(props, context);
		this.state = {
			sort: {
				sortBy: "id",
				sortDirection: SortDirection.DESC
			},
			value: []
		};
	}

	handleSelectChange = (value) => {
		this.setState({value});
	};

	renderHeader({dataKey, sortBy, sortDirection}) {
		var classes = ['FlexTable__headerRowContent'],
			isSorting = dataKey == sortBy;
		isSorting && classes.push('FlexTable__headerRowContent--sorting');

		return (
			<div className={classes.join(' ')}>
            <span>
                {dataKey} {isSorting &&
			<span className={"fa " + (sortDirection == 'ASC' ? "fa-chevron-up" : 'fa-chevron-down')}/>}
            </span>
			</div>
		);
	}

	render() {
		// Grid data as an array of arrays
		return (
			<div>
				<div>
					<h1>{size} Rows</h1>
				</div>

				<h2>
					Sortable
					<Tooltip place="right">
						A performant table with sorting
					</Tooltip>
				</h2>
				<AutoSizer disableHeight>
					{({width}) => (
						<Table
							className="table"
							height={300}
							width={width}
							sort={(sort) => {
								list = _.orderBy(list, [sort.sortBy], [sort.sortDirection == SortDirection.ASC ? 'asc' : 'desc']);
								this.setState({sort: sort});
							}}
							sortBy={this.state.sort.sortBy}
							sortDirection={this.state.sort.sortDirection}
							headerHeight={44}
							rowHeight={44}
							overscanRowCount={20}
							rowCount={list.length}
							rowGetter={
								({index}) => list[index]
							}
						>
							<Column
								headerRenderer={this.renderHeader}
								className="test"
								label='ID'
								dataKey='id'
								width={100}
							/>

							<Column
								headerRenderer={this.renderHeader}
								width={width}
								label='Description'
								dataKey='description'
								cellRenderer={({rowData}) => (
									<div style={{width: 200}}>The description {rowData.description}</div>
								)}
							/>

						</Table>
					)}
				</AutoSizer>
			</div>
		);
	}
};
