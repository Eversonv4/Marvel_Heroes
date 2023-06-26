import { CardsList } from "src/components/CardsList";
import {
  CardsContainer,
  CardsContainerLayout,
  FooterContainer,
  Header,
  SearchContainer,
  SearchContainerLayout,
  TitleHighlight,
} from "./styles";
import { FiSearch } from "react-icons/fi";
import { ResultsList } from "src/components/ResultsList";
import { useEffect, useState } from "react";
import { getAllCharacters } from "src/shared/utils/fetch_api";
import { ICharacterProps } from "src/@types/interfaces";
import { LoaderContainer } from "src/components/LoadAnimation/styles";

export function Home() {
  const [showResults, setShowResults] = useState(false);
  const [charactersHighlight, setCharactersHighlight] = useState<
    ICharacterProps[]
  >([]);

  async function getHighlightHeroes() {
    const { data } = await getAllCharacters(10, 0);
    if (data?.results.length === 0) {
      setCharactersHighlight([]);
    }
    data?.results && setCharactersHighlight(data?.results);
  }

  useEffect(() => {
    getHighlightHeroes();
  }, []);
  return (
    <>
      <Header>
        <h1>MARVEL HEROES</h1>
      </Header>
      <SearchContainer>
        <SearchContainerLayout>
          <input
            type="text"
            placeholder="Buscar herói..."
            onFocus={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
          />
          <button>
            <FiSearch size={28} color="#FFFFFF" />
            <h2>Buscar</h2>
          </button>
          {showResults && <ResultsList />}
        </SearchContainerLayout>
      </SearchContainer>
      <CardsContainer>
        <CardsContainerLayout>
          <TitleHighlight>DESTAQUES</TitleHighlight>
          {charactersHighlight.length === 0 && <LoaderContainer />}
          <CardsList charactersHighlight={charactersHighlight} />
          {/* Fazer Paginação */}
        </CardsContainerLayout>
      </CardsContainer>
      <FooterContainer>
        <span>Everson Soares &copy; {new Date().getFullYear()}</span>
      </FooterContainer>
    </>
  );
}
