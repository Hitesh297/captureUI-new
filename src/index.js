import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routes';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import {Provider} from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDom.render(
	 <Provider store={createStoreWithMiddleware(reducers)}>
	<Routes />
	  </Provider>
	,document.querySelector('.container')
	);