import { Link, Outlet } from "react-router-dom";
import { AppMain, Detail, Nav } from "./styles";
import { GlobalStyle } from "@assets/styles/Library/GlobalStyle";
import { NavConfig } from "./constant";
// import "@mock/Library/books";

export const LibraryApp = () => {

  return (
    <>
      <GlobalStyle />
      <AppMain>
        <Nav
          width="10%"
        >
          {NavConfig.map((navitem) => (
            <Link
              key={navitem.id}
              to={navitem.path}
            >
              {navitem.icon}
            </Link>
          ))}
        </Nav>
        <Outlet />
      </AppMain>
    </>
  );
}