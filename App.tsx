import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';

import { ApolloProvider } from 'react-apollo';
import ApolloClient, { gql } from 'apollo-boost';
import { theme } from './src/utils/theme';

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
      <ThemeProvider theme={theme}>
        <Container>
          <Text>Hello</Text>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.whiteColor};
`;

const Text = styled.Text`
  color: ${theme.colors.lightGrey};
`;
