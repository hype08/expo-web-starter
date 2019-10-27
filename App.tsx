import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './src/utils/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Text>Hello!</Text>
      </Container>
    </ThemeProvider>
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
