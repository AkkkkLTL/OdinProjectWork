import Store from "@/redux/ShoppingCart/Store";
import { FC } from "react";
import { Provider } from "react-redux";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "./styles.scss"

const ShoppingCartApp:FC = () => {
  return (
    <Provider store={Store}>
      <Header />
      <Outlet />
    </Provider>
  )
}

export default ShoppingCartApp;