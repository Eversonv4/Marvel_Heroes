import { ILoadAnimationProps } from "src/@types/interfaces";
import { LoaderContainer } from "./styles";

export function LoadAnimation({ size, loaderColor }: ILoadAnimationProps) {
  return <LoaderContainer size={size} loaderColor={loaderColor} />;
}
