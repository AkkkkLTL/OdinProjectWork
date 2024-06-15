import { Contact } from "../types"

export type loaderResData = {
  contact: Contact
}

export type loaderReqData = {
  params: {
    contactId: string,
  }
}