export interface Filter {
  [key:string]:{
    title:string;
    defaultValue?:any;
    code: string;
    name: string;
    values: any[];
  }
}