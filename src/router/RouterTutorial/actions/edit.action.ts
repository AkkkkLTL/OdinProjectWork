import { updateContact } from "@api/RouterTutorial";
import { redirect } from "react-router-dom";

export async function editAction({request, params}:any) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log('formData:' + JSON.stringify(formData) + ' updates:' + JSON.stringify(updates));
  await updateContact(params.contactId, updates);
  return redirect(`../contacts/${params.contactId}`);
}