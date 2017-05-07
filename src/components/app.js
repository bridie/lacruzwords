import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTheme } from '../actions/index';
import Grid from './grid';
import Clues from './clues';

require('./../../styles/app.scss');
require('./../../styles/button.scss');

export class App extends Component {
	componentWillMount() {
		const theme = this.props.match.params.theme;
		this.props.fetchTheme(theme);
	}

	render() {
		if (!this.props.currentTheme) {
			return (<div>Loading...</div>);
		}

	    return (
			<div>
				<Grid currentTheme={this.props.currentTheme} />
				<Clues currentTheme={this.props.currentTheme} />
				<button className="button button--homepage" type="button" onClick={this.submit}>Submit</button>
			</div>
	    );
	}

	submit() {

	}
}

function mapStateToProps(state) {
	return { currentTheme: state.theme.currentTheme };
}

export default connect(mapStateToProps, { fetchTheme })(App);
