import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Actions from "./components/actions";
import Header from "./components/header";
import ModalRules from "./components/modalRules";
import Rules from "./components/rules";
import { GlobalStyle } from "./styles/global";
import { theme } from './styles/theme';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Actions />
      <Rules setShowModal={setShowModal} />
      {showModal && <ModalRules setShowModal={setShowModal}/>}
    </ThemeProvider>
  );
}

export default App;
