import { Cards } from "../Cards";
import { ListContainer } from "./styles";
import { ICardsListProps } from "src/@types/interfaces";

export function CardsList({ charactersDataList }: ICardsListProps) {
  return (
    <ListContainer>
      {charactersDataList.length > 0 &&
        charactersDataList.map((char) => {
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
