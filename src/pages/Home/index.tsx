import { Header, SearchContainer, SearchContainerLayout } from "./styles";
import { FiSearch } from "react-icons/fi";

export function Home() {
  return (
    <>
      <Header>
        <h1>MARVEL HEROES</h1>
      </Header>
      <SearchContainer>
        <SearchContainerLayout>
          <input type="text" placeholder="Buscar herói..." />
          <button>
            <FiSearch size={28} color="#FFFFFF" />
            <h2>Buscar</h2>
          </button>
        </SearchContainerLayout>
      </SearchContainer>
      <h1>HAHHH SÓ FUNCIONA COM LETRAS MAIÚSCULAS</h1>
      <div>
        <h1>HI</h1>
      </div>
    </>
  );
}
