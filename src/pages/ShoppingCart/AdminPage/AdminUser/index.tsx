import { FC } from "react";
import { IUser } from "../types";
import { useParams } from "react-router-dom";
import { adminUsersData } from "../constants";

const AdminUser:FC = () => {

  let user:IUser;
  const { id } = useParams();

  if (id) {
    const paramId:number = parseInt(id, 10);
    user = adminUsersData.filter(u => u.id === paramId)[0];
  } else {
    return null;
  }

  return (
    <div>
      <div>
        <b>Id: </b>
        <span>{user.id.toString()}</span>
      </div>
    </div>
  )
}

export default AdminUser;