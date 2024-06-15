import { createContact } from "@api/RouterTutorial";
import { redirect } from "react-router-dom";

export async function rootAction() {
  const contact = await createContact();
  return redirect(`./contacts/${contact.id}/edit`);
}