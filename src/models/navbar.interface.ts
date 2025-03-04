import { NavbarDropdownItemBusinessSolution, NavbarDropdownItemService } from "./navbar-dropdown-item.interface";

export interface NavBarItemList {
  type: 'default' | 'dropdown';
  labelText: string;
  value: string;
  pageUrl: string;
  items: NavbarDropdownItemService[] | NavbarDropdownItemBusinessSolution[];
}