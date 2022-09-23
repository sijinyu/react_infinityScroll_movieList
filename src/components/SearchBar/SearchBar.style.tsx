import styled from "@emotion/styled";
import { Box, InputBase } from "@mui/material";

const Container = styled(Box)`
  position: fixed;
  top: 20px;
  max-width: 760px;
  width: 100%;
  display: flex;
  gap: 20px;
  background-color: white;
  z-index: 40;
`;
const SearchInput = styled(InputBase)`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  min-height: 45px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  width: 100%;
  box-shadow: none;
  text-decoration: none;
`;

export { Container, SearchInput };
