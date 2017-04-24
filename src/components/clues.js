import React, { Component } from 'react';
import _ from 'lodash';

require('./../../styles/clues.scss');

export default class Clues extends Component {
	render() {
		const across = this.getWordsWithDirection('across');
		const down = this.getWordsWithDirection('down');

		return (
			<div className="clues">
				<div className="clues__column clues__column--across">
					<h2>Across</h2>
					{this.renderClues(across)}
				</div>
				
				<div className="clues__column clues__column--down">
					<h2>Down</h2>
					{this.renderClues(down)}
				</div>
			</div>
		)
	}

	renderClues(clues) {
		const html = [];

		Object.keys(clues).map((word) => {
			html.push(
				<p key={word}>
					<span>
					{ clues[word].number }.
					</span>
					 <span> </span>
					{ clues[word].clue }
				</p>
			)
		})

		return html;
	}

	getDownWords() {
		return this.getWordsWithDirection('across');
	}

	getWordsWithDirection(direction) {
		return _.pickBy(this.props.currentTheme, { direction });
	}
}
