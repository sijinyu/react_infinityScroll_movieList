import React from "react";
import styled from "@emotion/styled";

interface ContainerProps {
  children: React.ReactNode;
}

export const ContainerBase = styled.div`
  padding: 30px 60px 120px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

const Container = ({ children, ...props }: ContainerProps) => {
  return <ContainerBase {...props}>{children}</ContainerBase>;
};

export default Container;
