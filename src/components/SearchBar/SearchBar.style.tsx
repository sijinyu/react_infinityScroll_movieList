import styled from "@emotion/styled";
import { Box, InputBase } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  gap: 20px;
  max-width: 500px;
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
