import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyles";
import { LoginPage } from "./Screens";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
