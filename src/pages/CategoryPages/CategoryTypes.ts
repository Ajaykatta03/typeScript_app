export interface CategoryType {
    id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  ratingCount?: number;
  color?: string;
  unavailable?: boolean; 
}