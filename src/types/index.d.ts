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
  size?: Size;
  color?: Color;
}
