import { ThemeProvider } from "styled-components";
import Theme from "src/shared/globalTheme/theme";
import { GlobalStyle } from "src/shared/globalStyle/GlobalStyle";
import MainRoutes from "./routes/routes";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
