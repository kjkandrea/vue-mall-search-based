export interface SearchRequest {
  keyword?: string;
  filters?: { [key: string]: string };
}

export interface SearchResponse {
  count: number;
  contents: Product[];
}

export interface Product {
  title: string;
  price: number;
  imageUrl: string;
  productUrl: string;
  size?: number;
  color?: string;
}

export interface FilterRequest {
  keyword: string;
}

export interface FilterResponse {
  keyword: string;
  filters: Filter[];
}

export interface Filter {
  title: string;
  name: string;
  options: string[];
}
