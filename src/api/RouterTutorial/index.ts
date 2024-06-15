import localforage from "localforage";
import { matchSorter } from "match-sorter";
import { fakeNetWork } from "@api/helpers"
import sortBy from "sort-by";
import { Contact } from "@pages/RouterTutorial/types";
import { nanoid } from "nanoid";

export const getContacts = async (query?:string|null) => {
  await fakeNetWork(`getContacts:${query}`);
  let contacts:Contact[]|null = await localforage.getItem<Contact[]>("contacts");
  if (!contacts) contacts = [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"]});
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export const getContact = async (id:string) => {
  await fakeNetWork(`contact:${id}`);
  let contacts = await getContacts();
  let contact = contacts.find(contact => contact.id === id);
  return contact ?? null;
}

export const createContact = async () => {
  await fakeNetWork();
  let id = nanoid();
  let contact = { id, createAt: Date.now() };
  let contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export const updateContact = async (id:string, updates:Contact) => {
  await fakeNetWork();
  let contacts = await getContacts();
  let contact = contacts.find(contact => contact.id === id);
  if (!contact) throw new Error(`No contact found for ${id}`);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export const deleteContact = async (id:string) => {
  let contacts = await getContacts();
  let index = contacts.findIndex(contact => contact.id === id);
  if (index < 0) return false;
  contacts.splice(index, 1);
  await set(contacts);
  console.log("delete:" + index);
  return true;
}

function set (contacts:Contact[]) {
  return localforage.setItem("contacts", contacts)
}