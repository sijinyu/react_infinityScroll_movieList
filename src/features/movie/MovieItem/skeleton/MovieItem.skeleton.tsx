import {
  ContainerSkeleton,
  ContentSectionSkeleton,
  ImageSectionSkeleton,
} from "./MovieItem.skeleton.style";

const MovieItemSkeleton = () => {
  return (
    <>
      {new Array(10).fill("").map((_, i) => (
        <ContainerSkeleton key={i}>
          <ImageSectionSkeleton></ImageSectionSkeleton>
          <ContentSectionSkeleton></ContentSectionSkeleton>
        </ContainerSkeleton>
      ))}
    </>
  );
};

export default MovieItemSkeleton;
