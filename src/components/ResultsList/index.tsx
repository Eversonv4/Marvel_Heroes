import { ICardsListProps } from "src/@types/interfaces";
import { ResultItem, ResultsListContainer } from "./styles";
import { Link } from "react-router-dom";
import { LoadAnimation } from "../LoadAnimation";
import { useEffect } from "react";

export function ResultsList({
  charactersDataList,
  isLoading,
}: ICardsListProps) {
  useEffect(() => {}, [charactersDataList, isLoading]);
  return (
    <ResultsListContainer>
      {charactersDataList.length === 0 ? (
        <p>Buscando...</p>
      ) : (
        <>
          {isLoading && <LoadAnimation loaderColor="#222222" size="25" />}
          {charactersDataList.map((char) => (
            <Link to={`/character/${char?.id}`} key={char?.id}>
              <ResultItem>
                <h3>{char?.name}</h3>
                <picture>
                  <img
                    src={`${char?.thumbnail?.path}.${char?.thumbnail?.extension}`}
                    alt={char?.name}
                  />
                </picture>
              </ResultItem>
            </Link>
          ))}
        </>
      )}
    </ResultsListContainer>
  );
}
