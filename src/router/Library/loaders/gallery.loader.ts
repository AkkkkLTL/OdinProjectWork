import { getSummary } from "@api/Library"

export const summaryLoader = async () => {
  const summaryData = (await getSummary())?.data;
  return { summaryData }
}