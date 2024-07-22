export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
}

export interface ProductResult {
  items: Product[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}
