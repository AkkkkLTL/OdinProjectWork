import { FC } from "react";
import { adminUsersData } from "../constants";
import { NavLink } from "react-router-dom";

const AdminUsers:FC = () => {
  return (
    <div>
      <ul className="admin-sections">
        {adminUsersData.map(user => (
          <li key={user.id}>
            <NavLink to={`../users/${user.id}`}
             className={({isActive}) => isActive ? "admin-link-active" : ""}
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdminUsers;