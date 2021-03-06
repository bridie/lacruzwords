import React, { Component } from 'react';
import _ from 'lodash';

require('./../../styles/grid.scss');

export default class Grid extends Component {
	renderRows() {
		let i;
		let rows = [];

		for (i = 1; i <= 12; i++) {
			rows.push((
				<div key={`row-${i}`} className="grid__row">
					{this.renderCells(i)}
				</div>
			));
		}

		return rows;
	}

	renderCells(row) {
		let i, isActive;
		let cells = [];

		for (i = 1; i <= 12; i++) {
			isActive = this.isActive(i, row);

			cells.push((
				<input
					name={`${i}-${row}`}
					key={`cell-${row}-${i}`}
					className={"grid__cell" + (isActive ? " grid__cell--active" : " grid__cell--inactive")}
					type="text"
					disabled={isActive ? false : 'disabled'}
					maxLength="1" />
			));
		}

		return cells;
	}

	render() {
		return (
			<div className="grid">
				{this.renderRows()}
			</div>
		)
	}

	isActive(cell, row) {
		let isActive = false;
		const letterPositions = _.flatten(_.map(this.props.currentTheme, 'letters'));

		_.forEach(letterPositions, (letterPosition) => {
			if (_.isEqual(letterPosition, [cell, row])) {
				isActive = true;
				return  false;
			}
		});

		return isActive;
	}
}
