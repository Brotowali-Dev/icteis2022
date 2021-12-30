import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckx4nuu2v3lun01w832w04y2b/master',
  cache: new InMemoryCache(),
});

export default client;
