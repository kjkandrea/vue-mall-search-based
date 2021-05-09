export interface SearchRequest {
  keyword?: string;
  filters?: SearchFilter;
}

export interface SearchFilter {
  brand?: string;
  size?: Size;
  color?: Color;
}

export type Size = 85 | 90 | 95 | 100 | 105 | 110;

export type Color = "red" | "green" | "blue" | "white" | "black";

export interface SearchResponse {
  count: number;
  contents: Product[];
}

export interface Product {
  title: string;
  price: number;
  imageUrl: string;
  size?: Size;
  color?: Color;
}
