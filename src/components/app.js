import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTheme } from '../actions/index';
import Grid from './grid';

require('./../../styles/app.scss');

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
			</div>
	    );
	}
}

function mapStateToProps(state) {
	return { currentTheme: state.theme.currentTheme };
}

export default connect(mapStateToProps, { fetchTheme })(App);
