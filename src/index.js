import React from 'react';
import ReactDom from 'react-dom';
import Routes from './routes';


import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
	uri: 'http://localhost:8080/graphql'
});

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDom.render(
	 <ApolloProvider client={client}>
	<Routes />
	  </ApolloProvider>
	,document.querySelector('.container')
	);
