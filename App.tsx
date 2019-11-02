import * as React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { gql } from 'apollo-boost';
import { theme } from './src/utils/theme';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

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

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme} />
      <NavigationNativeContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationNativeContainer>
    </ApolloProvider>
  );
};

export default App;
