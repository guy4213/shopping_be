export interface Category {
  id: number;
  name: string;
}

export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  categoryId: number;
}
