import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Grid from './grid';

require('./../../styles/app.scss');

export default class App extends Component {
  render() {
    return (
    	<div>
    		<Route path='/:theme' component={Grid} />
    	</div>
    );
  }
}
