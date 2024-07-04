import { getBooks, getSummary } from "@api/Library"

export const summaryLoader = async () => {
  const [summaryData, readingBooks] = await Promise.all(
    [
      getSummary(),
      getBooks({status: "READING"})
    ]
  ).then((values) => {
    return values.map((data) => data?.data);
  })

  return { summaryData, readingBooks }
}