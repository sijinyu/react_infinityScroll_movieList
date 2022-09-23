import { styled } from "@mui/material";
import SkeletonBase from "src/components/SkeletonBase";
import { Container } from "../MovieItem.style";

const ContainerSkeleton = styled(Container)`
  display: flex;
  width: 100%;
  gap: 10px;
  height: 400px;
`;

const ImageSectionSkeleton = styled(SkeletonBase)`
  border-radius: 10px;
  height: 100%;
  width: 600px;
`;

const ContentSectionSkeleton = styled(SkeletonBase)`
  border-radius: 10px;
  padding: 20px 10px;
`;

export { ContainerSkeleton, ImageSectionSkeleton, ContentSectionSkeleton };
