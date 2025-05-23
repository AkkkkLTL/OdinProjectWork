import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AppStore {
  resumeStructual:string;
  setResumeStructual: (resumeStructual:string) => void;
}

export const useCVStore = create<AppStore>()(
  devtools(
    (set) => ({
      resumeStructual: "top",
      setResumeStructual: (resumeStructual:string) => set({ resumeStructual }),
    }),
    { 
      name: "cv_store",
      enabled: process.env.NODE_ENV === "development",
    },
  ),
);