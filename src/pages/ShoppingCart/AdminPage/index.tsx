import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./styles.scss";

const AdminPage:FC = () => {

  const loggedIn = true;

  return (
    <div className="page-container">
      <h1>Admin Panel</h1>
      <ul className="admin-sections">
        <li key="users">
          <NavLink to={`./users`}
            className={({isActive}) => isActive ? "admin-link-active" : ""}
          >
            Users
          </NavLink>
        </li>
        <li key="products">
          <NavLink to={"./products"}
          className={({isActive}) => isActive ? "admin-link-active" : ""}
          >
            Products
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default AdminPage