import { Cards } from "../Cards";
import { ListContainer } from "./styles";
import { CardsListProps } from "src/@types/interfaces";

export function CardsList({ charactersHighlight }: CardsListProps) {
  return (
    <ListContainer>
      {charactersHighlight.length > 0 &&
        charactersHighlight.map((char) => {
          return (
            <Cards
              id={char?.id}
              key={char?.id}
              name={char?.name}
              thumbnail={char?.thumbnail}
            />
          );
        })}
    </ListContainer>
  );
}
