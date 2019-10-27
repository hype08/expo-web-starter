import React from "react";
import styled, { ThemeProvider } from "styled-components";

import theme from "./src/utils/theme";

const App = () => {
  const name: string = "Henry";

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
  background-color: ${props => props.theme.colors.whiteColor};
`;

const Title = styled.Text`
  color: ${props => props.theme.colors.greyColor};
`;

const Name = styled.Text`
  color: ${props => props.theme.colors.darkBlueColor};
`;
