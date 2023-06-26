import { IComicsListProps } from "src/@types/interfaces";
import { ComicsItem, ContainerList } from "./styles";

export function ComicsList({ comics }: IComicsListProps) {
  return (
    <ContainerList>
      {comics &&
        comics.slice(2, 8).map((comic) => (
          <ComicsItem key={comic?.id}>
            <figure>
              <img
                src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                alt=""
              />
            </figure>
          </ComicsItem>
        ))}
    </ContainerList>
  );
}
