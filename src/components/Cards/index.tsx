import { CardContainer } from "./styles";
import { Link } from "react-router-dom";
import { ICharacterProps } from "src/@types/interfaces";

export function Cards({ id, name, thumbnail }: ICharacterProps) {
  return (
    <Link to={`/character/${id}`}>
      <CardContainer>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        <h3>{name}</h3>
      </CardContainer>
    </Link>
  );
}
