import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {Switch} from 'react-router';
import App from '../components/app';
import LoginPage from '../components/loginPage';

export default () => (
<BrowserRouter>
<div>
	<Switch>
		<Route exact path='/' component={App} />
		<Route exact path='/login' component={LoginPage} />
	</Switch>
	</div>
</BrowserRouter>
	);
