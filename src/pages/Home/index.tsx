import { CardsList } from "src/components/CardsList";
import {
  ArrowLeft,
  ArrowRight,
  CardsContainer,
  CardsContainerLayout,
  PaginationContainer,
  SearchContainer,
  SearchContainerLayout,
  TitleHighlight,
} from "./styles";
import { FiSearch } from "react-icons/fi";
import { ResultsList } from "src/components/ResultsList";
import { useEffect, useState } from "react";
import {
  getAllCharacters,
  getCharacterByName,
} from "src/shared/utils/fetch_api";
import { ICharacterProps } from "src/@types/interfaces";
import { LoadAnimation } from "src/components/LoadAnimation";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

export function Home() {
  const [showResults, setShowResults] = useState(false);
  const [showLoaderAnimation, setShowLoaderAnimation] = useState(true);
  const [showLoadingRestultList, setShowLoadingRestultList] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [showBtnPrev, setShowBtnPrev] = useState(false);

  function changeCurrentPageList(type: "increase" | "decrease") {
    currentPage === 0 && setShowBtnPrev(false);
    currentPage !== 0 && setShowBtnPrev(true);
    type === "increase" && setCurrentPage(currentPage + 1);
    type === "decrease" && setCurrentPage(currentPage - 1);
  }

  const [charactersHighlight, setCharactersHighlight] = useState<
    ICharacterProps[]
  >([]);
  const [charsResultSearch, setCharsResultSearch] = useState<ICharacterProps[]>(
    []
  );
  const [heroNameInput, setHeroNameInput] = useState("");

  async function getHighlightHeroes(page: number) {
    setShowLoaderAnimation(true);
    page === 0 && setShowBtnPrev(false);
    page !== 0 && setShowBtnPrev(true);
    const { data } = await getAllCharacters(10, page);
    if (data?.results.length === 0) {
      setCharactersHighlight([]);
    }
    data?.results && setCharactersHighlight(data?.results);
    setShowLoaderAnimation(false);
  }

  async function getHeroesByName() {
    setShowLoadingRestultList(true);
    const data = await getCharacterByName(heroNameInput);
    const results = data?.data?.results;

    if (!results) {
      setCharsResultSearch([]);
      setShowLoadingRestultList(false);
      return;
    }
    results && setCharsResultSearch(results);
    setShowLoadingRestultList(false);
  }

  useEffect(() => {
    getHighlightHeroes(currentPage);
  }, [currentPage]);
  return (
    <>
      <Header onClick={() => setShowResults(false)} />
      <SearchContainer>
        <SearchContainerLayout>
          <input
            type="text"
            placeholder="Buscar herói..."
            onFocus={() => setShowResults(true)}
            onChange={(e) => setHeroNameInput(e.target.value)}
            onKeyDown={getHeroesByName}
          />
          <button onClick={getHeroesByName}>
            <FiSearch size={28} color="#FFFFFF" />
            <h2>Buscar</h2>
          </button>
          {showResults && (
            <>
              <ResultsList
                charactersDataList={charsResultSearch ?? []}
                isLoading={showLoadingRestultList}
              />
            </>
          )}
        </SearchContainerLayout>
      </SearchContainer>
      <CardsContainer onClick={() => setShowResults(false)}>
        <CardsContainerLayout>
          <TitleHighlight>DESTAQUES</TitleHighlight>
          {showLoaderAnimation && <LoadAnimation />}
          {showLoaderAnimation === false &&
            charactersHighlight.length === 0 && <p>(Vazio)</p>}
          {!showLoaderAnimation && (
            <CardsList charactersDataList={charactersHighlight} />
          )}

          <PaginationContainer>
            {showBtnPrev && (
              <button onClick={() => changeCurrentPageList("decrease")}>
                <ArrowLeft />
                <h2>Anterior</h2>
              </button>
            )}

            <button onClick={() => changeCurrentPageList("increase")}>
              <h2>Próximo</h2>
              <ArrowRight />
            </button>
          </PaginationContainer>
        </CardsContainerLayout>
      </CardsContainer>
      <Footer onClick={() => setShowResults(false)} />
    </>
  );
}
