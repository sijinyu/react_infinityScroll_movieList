import React from "react";
import styled from "@emotion/styled";

interface ContainerProps {
  children: React.ReactNode;
}

export const ContainerBase = styled.div`
  padding: 30px 60px;
  display: flex;
  height: 100%;
  margin: 0 auto;
  flex-direction: column;
`;

const Container = ({ children, ...props }: ContainerProps) => {
  return <ContainerBase {...props}>{children}</ContainerBase>;
};

export default Container;
