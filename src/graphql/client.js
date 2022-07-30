import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_GRAPHQL_ROOT } from '../constants/environment.js';
import 'unfetch/polyfill';

export default new ApolloClient({
  uri: API_GRAPHQL_ROOT,
  cache: new InMemoryCache(),
  credentials: 'include'
});
