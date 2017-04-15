import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchTheme } from '../actions/index';

require('./../../styles/grid.scss');

class Grid extends Component {
	componentWillMount() {
		const theme = this.props.match.params.theme;
		const test = this.props.fetchTheme(theme);
	}

	renderRows() {
		let i;
		let rows = [];

		for (i = 0; i < 12; i++) {
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

		for (i = 0; i < 12; i++) {
			isActive = this.isActive(row + 1, i + 1);

			cells.push((
				<input
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
		if (!this.props.currentTheme) {
			return (<div>Loading...</div>);
		}

		return (
			<div className="grid">
				{this.renderRows()}
			</div>
		)
	}

	isActive(row, cell) {
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

function mapStateToProps(state) {
	return { currentTheme: state.theme.currentTheme };
}

export default connect(mapStateToProps, { fetchTheme })(Grid);
