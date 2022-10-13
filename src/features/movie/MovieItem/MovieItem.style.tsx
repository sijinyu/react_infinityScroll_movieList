import { Box, Stack, styled } from "@mui/material";

const Container = styled(`figure`)`
  &:not(:nth-of-type(1)) {
    margin-top: 20px;
  }
`;

const innerContainer = styled(Stack)`
  display: flex;
  border: 1px solid #dbdbdb;
  min-height: 400px;
  border-radius: 10px;
`;
const ImageSection = styled(`div`)`
  position: relative;
  overflow: hidden;
  max-height: 400px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const ContentSection = styled(Stack)`
  padding: 20px 10px;
`;

export { Container, innerContainer, ImageSection, ContentSection };
