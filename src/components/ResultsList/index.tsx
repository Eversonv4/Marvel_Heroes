import { ResultItem, ResultsListContainer } from "./styles";

export function ResultsList() {
  const buscando = true;
  return (
    <ResultsListContainer>
      {buscando ? (
        <p>Buscando...</p>
      ) : (
        <>
          <ResultItem>Hello</ResultItem>
          <ResultItem>Hello</ResultItem>
          <ResultItem>Hello</ResultItem>
          <ResultItem>Hello</ResultItem>
          <ResultItem>Hello</ResultItem>
          <ResultItem>Hello</ResultItem>
          <ResultItem>Hello</ResultItem>
        </>
      )}
    </ResultsListContainer>
  );
}
