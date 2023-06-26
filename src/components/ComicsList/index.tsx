import { IComicsListProps } from "src/@types/interfaces";
import { ComicsItem, ContainerList, ErrorMessage } from "./styles";

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

      {comics.length === 0 && (
        <ErrorMessage style={{ fontWeight: 400 }}>
          (Sem HQs Relacionadas)
        </ErrorMessage>
      )}
    </ContainerList>
  );
}
