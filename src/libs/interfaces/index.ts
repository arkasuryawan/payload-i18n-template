export * from "./icon";
export interface MenuInterface {
  name?: string;
  label?: string;
  url: string;
  subItems?: MenuInterface[];
  class?: string;
  col?: number;
  active?: boolean;
}
