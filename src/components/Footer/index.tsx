import { IFooterProps } from "src/@types/interfaces";
import { FooterContainer } from "./styles";

export function Footer({ onClick }: IFooterProps) {
  return (
    <FooterContainer onClick={onClick}>
      <span>Everson Soares &copy; {new Date().getFullYear()}</span>
    </FooterContainer>
  );
}
