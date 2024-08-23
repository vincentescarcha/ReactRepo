import IHouse from "./IHouse";

export default interface INavState {
  current: string;
  param?: IHouse; 
  navigate: (navTo: string, param?: IHouse) => void;
}
