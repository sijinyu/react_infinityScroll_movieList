import React from "react";
import { CircularProgress } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;
const InnerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default function SplashScreen() {
  return (
    <Container>
      <InnerContainer>
        <CircularProgress color="success" />
      </InnerContainer>
    </Container>
  );
}
