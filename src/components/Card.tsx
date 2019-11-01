import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from '../../src/utils/theme';

interface Props {
  title: string;
}

const Card: React.FC<Props> = () => {
  return (
    <Container>
      <Text>Hello</Text>
    </Container>
  );
};

export default Card;

const Container = styled.View`
  margin-top: 20px;
  border-radius: 14px;
  padding: 20px;
  height: 280px;
  width: 315px;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Text = styled.Text`
  color: ${theme.colors.darkBlue};
  font-weight: bold;
  font-size: 24px;
  margin-top: 20px;
  margin-left: 20px;
  max-width: 170px;
`;
