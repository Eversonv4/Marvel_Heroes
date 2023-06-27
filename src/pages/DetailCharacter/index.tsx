import { useParams, useNavigate } from "react-router-dom";
import { Header } from "src/components/Header";
import {
  ComicsContainer,
  DescriptionContainer,
  DetailsContainer,
  DetailsContainerLayout,
  ErrorMessage,
  HeaderDivisorContainer,
} from "./styles";
import { Footer } from "src/components/Footer";
import { useEffect, useState } from "react";
import { getCharacterById } from "src/shared/utils/fetch_api";

import { ComicsList } from "src/components/ComicsList";
import { IDetailCharProps } from "src/@types/interfaces";
import { LoadAnimation } from "src/components/LoadAnimation";

export function DetailCharacter() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [heroData, setHeroData] = useState<IDetailCharProps>(
    {} as IDetailCharProps
  );

  const [showLoadingPage, setShowLoadingPage] = useState(false);
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
  const [showErrorId, setShowErrorId] = useState(false);

  async function getHeroData(id: string) {
    setShowLoadingPage(true);
    setShowLoadingAnimation(true);
    const response = await getCharacterById(id);
    setHeroData(response!);
    if (!response) {
      setShowErrorId(true);
    }
    setShowLoadingPage(false);
    setShowLoadingAnimation(false);
  }

  useEffect(() => {
    getHeroData(id!);
  }, [id]);

  if (showLoadingPage) {
    return (
      <div style={{ marginTop: 300 }}>
        <LoadAnimation size="100" loaderColor="#222222" />;
      </div>
    );
  }

  return (
    <>
      <Header onClick={() => navigate("/")} />
      <HeaderDivisorContainer />
      <DetailsContainer>
        <DetailsContainerLayout>
          {heroData?.character && (
            <>
              <figure>
                <img
                  src={`${heroData?.character[0]?.thumbnail?.path}.${heroData?.character[0]?.thumbnail?.extension}`}
                  alt=""
                />
              </figure>

              <DescriptionContainer>
                <h2>{heroData?.character[0]?.name}</h2>
                <p>
                  {heroData?.character[0]?.description || "(Sem Descrição)"}
                </p>

                {heroData?.character && (
                  <a
                    href={heroData?.character[0]?.urls[2]?.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Veja Mais</button>
                  </a>
                )}
              </DescriptionContainer>
              <ComicsContainer>
                <h3>Principais HQs</h3>

                {!heroData?.comics && showLoadingAnimation ? (
                  <LoadAnimation />
                ) : (
                  <ComicsList comics={heroData?.comics} />
                )}
              </ComicsContainer>
            </>
          )}

          {showErrorId && <ErrorMessage>HERÓI NÃO ENCONTRADO</ErrorMessage>}
        </DetailsContainerLayout>
      </DetailsContainer>
      <Footer />
    </>
  );
}
