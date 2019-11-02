import * as React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { theme } from '../utils/theme';
import Card from '../components/Card';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Card />
      <RightTouch
        onPress={(): void => navigation.navigate('Details')}
        style={{
          position: 'absolute',
          top: 650,
          left: '50%',
          marginLeft: -22,
          zIndex: 1,
        }}
      >
        <NavButton>
          <Icon name="ios-arrow-forward" size={20} color="#546bfb" />
        </NavButton>
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

const RightTouch = styled.TouchableOpacity`
  position: absolute;
  top: 560;
  z-index: 1;
`;

const NavButton = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;
