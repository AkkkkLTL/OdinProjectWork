import { FC } from "react";
import useHeader from "./useHeader";
import logo from "@/assets/icons/react.svg";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import BasketSummary from "./BasketSummary";

const Header:FC = () => {

  const {
    search, basketCount,
    handleSearchChange, handleSearchKeydown
  } = useHeader();

  return (
    <header className="header">
      <div className="search-container">
        <input 
          type="search"
          placeholder="search"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeydown}
        />
        <BasketSummary count={basketCount} />
      </div>
      <img src={logo} className="header-logo" alt="logo" />
      <h1 className="header-title">React Shop</h1>
      <nav>
        <NavLink to={"./products"}
          className={({isActive}) => `header-link ${isActive ? "header-link-active" : ""}`}
        >
          Products
        </NavLink>
        <NavLink to={"./contactus"}
          className={({isActive}) => `header-link ${isActive ? "header-link-active" : ""}`}
        >
          ContactUs
        </NavLink>
        <NavLink to={"./admin"}
          className={({isActive}) => `header-link ${isActive ? "header-link-active" : ""}`}
        >
          Admin
        </NavLink>
      </nav>
    </header>
  )
}

export default Header;