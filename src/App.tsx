import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GameContext, { GameProvider } from "./context/gameContext";
import Home from "./pages/Home";

import Rules from "./components/rules";
import ModalRules from "./components/modalRules";

import { GlobalStyle } from "./styles/global";
import { theme } from './styles/theme';
import Header from "./components/header";
import Game from "./pages/Game";

function App() {
  const { showModal } = useContext(GameContext)

  return (
    <ThemeProvider theme={theme}>
      <GameProvider>
        <GlobalStyle />
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/playing' exact component={Game} />
          </Switch>
          <Rules />
          {showModal && <ModalRules />}
        </Router>
      </GameProvider>
    </ThemeProvider>
  );
}

export default App;
