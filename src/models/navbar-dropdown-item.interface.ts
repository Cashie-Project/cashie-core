export interface NavbarDropdownItemService {
  labelText: string;
  value: string;
  items?: NavbarDropdownDataItem[];
}

export interface NavbarDropdownItemBusinessSolution {
  labelText: string;
  value: string;
  pageUrl?: string;
}

export interface NavbarDropdownDataItem {
  labelText: string;
  value: string;
  pageUrl: string;
}