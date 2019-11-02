import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { gql } from 'apollo-boost';
import { theme } from './src/utils/theme';
import AppNavigator from './src/navigation/AppNavigator';

const client = new ApolloClient({ uri: 'http://localhost:4000' });

export const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      id
      content
      title
      published
    }
  }
`;

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme} />
      <AppNavigator />
    </ApolloProvider>
  );
};

export default App;
