import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Grid from './components/grid';

export default (
	<Route path='/' component={App}>
		<Route path=":theme" component={Grid} />
	</Route>
);
