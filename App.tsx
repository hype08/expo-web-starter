import React from 'react';
import styled from 'styled-components/native';

import { whiteColor, lightGrey, darkBlue } from './src/utils/Styles';

const App: React.FC = () => {
  const name = 'Henry';

  return (
    <Container>
      <Title>Hello,</Title>
      <Name>{`${name}`}</Name>
    </Container>
  );
};

export default App;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${whiteColor};
`;

const Title = styled.Text`
  color: ${lightGrey};
`;

const Name = styled.Text`
  color: ${darkBlue};
`;
