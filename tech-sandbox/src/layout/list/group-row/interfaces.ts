import { Item } from '../item-row/interfaces';

export interface Group {
  id: string;
  title: string;
  items: Item[];
}
