export type CartState = {
  data: any[];
  loading: boolean;
  error: null | string;
  cart: any[];
};
export type CartAction = {
  type: string;
  payload?: any;
};
export type Product = {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  description: string;
  quantity?: number;
};
