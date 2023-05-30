import { Skeleton } from "../../Skeleton";
import { Container } from "../styles";


export function SkeletonSnack() {
  return <div className="skeleton-wrapper">
    <Container>
      <Skeleton type="title"></Skeleton>
      <Skeleton type="thumbnail"></Skeleton>
      <Skeleton type="text"></Skeleton>
      <Skeleton type="text"></Skeleton>

      <div>
        <Skeleton type="title"></Skeleton>
        <Skeleton type="image"></Skeleton>
      </div>
    </Container>
  </div>
}
