import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';

import theme from './src/utils/theme';

const App: React.FC = () => {
  const name = 'Henry';

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>Hello,</Title>
        <Name>{`${name}`}</Name>
      </Container>
    </ThemeProvider>
  );
};

export default App;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f0f3f5;
`;

const Title = styled.Text``;

const Name = styled.Text``;
