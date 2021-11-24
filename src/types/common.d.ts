export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface RqstPageable {
  pageNumber: number;
  pageSize: number;
  sort?: {
    orders: SortProperty[];
  };
  sortBo?: {
    orders: SortBoProperty[];
  };
}

export interface Page<T> {
  content: T[];
  pageable: null | Pageable;
  empty: boolean;
  first: boolean;
  last: boolean;
  totalPages: number;
  totalElements: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  size: number;
  number: number;
  numberOfElements: number;
}

export interface AnyObject {
  [key: string]: any;
}

export type AnyFunction = (...args: any[]) => any;

export interface Error {
  message?: string;
}

export interface Breadcrumb {
  text: string;
  link?: string;
}

export interface DatetimeBlock {
  createdAt: string;
  updatedAt: string;
}
