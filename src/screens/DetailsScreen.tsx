import * as React from 'react';
import styled from 'styled-components/native';
import Card from '../components/Card';
import { theme } from '../utils/theme';

const DetailsScreen: React.FC = () => {
  return (
    <Container>
      <Card title="hello" />
    </Container>
  );
};

export default DetailsScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.whiteColor};
`;