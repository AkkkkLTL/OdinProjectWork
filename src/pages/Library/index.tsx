import { Link, Outlet } from "react-router-dom";
import * as ComponentStyles from "./styles";
import { GlobalStyle } from "@/assets/styles/Library/GlobalStyle";
import { NavConfig } from "./constant";
// import "@mock/Library/books";

export const LibraryApp = () => {

  return (
    <>
      <GlobalStyle />
      <ComponentStyles.AppContainer>
        <ComponentStyles.SiderWrapper 
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
        </ComponentStyles.SiderWrapper>
        <Outlet />
      </ComponentStyles.AppContainer>
    </>
  );
}