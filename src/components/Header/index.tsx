import { IHeaderProps } from "src/@types/interfaces";
import { HeaderContainer } from "./styles";

export function Header({ onClick }: IHeaderProps) {
  return (
    <HeaderContainer onClick={onClick}>
      <h1>MARVEL HEROES</h1>
    </HeaderContainer>
  );
}
