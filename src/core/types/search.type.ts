import {User} from './user.type';

export interface RootSearch {
  data: DataSearch;
}

export interface DataSearch {
  count: number;
  items: User[];
}
