import { ThemeProvider } from "styled-components";
import Actions from "./components/actions";
import Header from "./components/header";
import { GlobalStyle } from "./styles/global";
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Actions />
    </ThemeProvider>
  );
}

export default App;
