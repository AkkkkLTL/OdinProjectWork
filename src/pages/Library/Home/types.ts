import { Book, SummaryData } from "@/router/Library/loaders/types"

export type homeLoader = {
  summaryData: SummaryData[],
  readingBooks: Book[],
}

export type dataType = SummaryData[];
export type optionType = {
  value: number,
  name: string,
  itemStyle: {
    color: string
  },
}

export type FileType = {
  pages: number,
  currentPages: number,
}