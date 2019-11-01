import * as React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import { theme } from '../utils/theme';

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Card title="HomeScreen" />
      <RightTouch
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          marginLeft: -22,
          zIndex: 1,
        }}
      >
        <Nav>
          <Icon name="ios-arrow-forward" size={20} color="#546bfb" />
        </Nav>
      </RightTouch>
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
  z-index: 1;
`;

const RightTouch = styled(LeftTouch)``;

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
