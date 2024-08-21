import { deleteContact } from "@/api/RouterTutorial";
import { redirect } from "react-router-dom";

export async function deleteAction({params}:any) {
  await deleteContact(params.contactId);
  return redirect("../");
}