import * as React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  margin-top: 20px;
  border-radius: 14px;
  padding: 20px;
  height: 500px;
  width: 315px;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Card: React.FC = () => {
  return <Container />;
};

export default Card;
