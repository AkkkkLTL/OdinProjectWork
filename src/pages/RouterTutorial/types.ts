export type Contacts = Contact[];

export interface Contact {
  id?: string,
  first?: string,
  last?: string,
  favorite?: boolean,
  avatar?: string,
  twitter?: string,
  notes?: string,
  createAt?: number,
}

export type LoaderData = {
  contacts: Contact[],
  q: string | undefined,
}