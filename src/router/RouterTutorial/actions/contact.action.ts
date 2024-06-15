import { updateContact } from "@api/RouterTutorial";

export async function contactAction({request, params}:any) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}