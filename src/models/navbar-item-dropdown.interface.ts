import { NavbarDropdownItemBusinessSolution, NavbarDropdownItemService } from './navbar-dropdown-item.interface';

export interface NavBarItemDropdownInterface {
  labelText: string;
  value: string;
  items?: NavbarDropdownItemService[] | NavbarDropdownItemBusinessSolution[];
}