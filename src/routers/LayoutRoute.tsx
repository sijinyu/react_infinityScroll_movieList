import { Container } from "@components";
import React from "react";
import { Outlet } from "react-router-dom";

export default function LayoutRoute() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
