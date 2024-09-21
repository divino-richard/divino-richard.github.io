import { IconType } from "react-icons";

export interface NavigationItem {
  value: string;
  label: string;
}

export interface IService {
  icon: IconType;
  title: string;
  items: string[];
}

export interface ITechnology {
  icon: IconType;
  name: string;
}
