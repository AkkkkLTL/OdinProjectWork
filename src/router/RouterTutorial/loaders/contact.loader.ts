import { getContact } from "@api/RouterTutorial";

export const contactLoader = async ({params}:any) => {
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "No Found"
    });
  }
  return { contact };
}