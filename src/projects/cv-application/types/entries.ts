export interface Personal {
  baseInfo: {
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string
  },
  optionalInfo: {

  }
}

interface Section {
  isCollapsed: boolean,
  isHidden: boolean,
}

export interface Education extends Section {
  id: string;
  schoolName: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface Experience extends Section {
  id: string;
  companyName: string;
  positionTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export type ExModules<T> = {
  [key:string]: T;
};