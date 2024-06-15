import { getContacts } from "@api/RouterTutorial";

export async function rootLoader({request}:any) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}