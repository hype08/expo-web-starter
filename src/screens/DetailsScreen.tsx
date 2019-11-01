import * as React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useNavigationState } from 'react-navigation-hooks';
import Card from '../components/Card';
import { theme } from '../utils/theme';

const DetailsScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { routeName } = useNavigationState();

  return (
    <Container>
      <Text>{routeName}</Text>
      <Card />
      <LeftTouch
        onPress={(): boolean => navigate('Home')}
        style={{
          position: 'absolute',
          top: 600,
          left: '50%',
          marginLeft: -22,
          zIndex: 1,
        }}
      >
        <NavButton>
          <Icon name="ios-arrow-back" size={20} color="#546bfb" />
        </NavButton>
      </LeftTouch>
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

const Icon = styled(Ionicons)``;

const LeftTouch = styled.TouchableOpacity`
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

const Text = styled.Text``;
