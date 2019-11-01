import * as React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import { theme } from '../utils/theme';

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Card title="HomeScreen" />
      <RightTouch>
        <Nav>
          <Icon name="ios-arrow-forward" size={20} color="#546bfb" />
        </Nav>
      </RightTouch>
      <LeftTouch>
        <Nav>
          <Icon name="ios-arrow-back" size={20} color="#546bfb" />
        </Nav>
      </LeftTouch>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.whiteColor};
`;

const Icon = styled(Ionicons)``;

const LeftTouch = styled.TouchableOpacity`
  position: absolute;
  top: 560;
  left: 25%;
  z-index: 1;
`;

const RightTouch = styled(LeftTouch)`
  left: 55%;
`;

const Nav = styled.View`
  margin: 10px;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;
