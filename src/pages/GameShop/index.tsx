import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "@assets/styles/GameShop/font.css";
import "@assets/styles/GameShop/normalize.css";

import Header from "@components/GameShop/Header";
import store from "@redux/GameShop/store";
import GlobalStyle from "@assets/styles/GameShop/GlobalStyle";
import gameTheme from "@assets/theme/GameShop";

export function GameShopApp() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={gameTheme}>
        <GlobalStyle />
        <Header />
        <Outlet />
      </ThemeProvider>
    </Provider>
  );
}