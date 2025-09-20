export interface CartItem {
  id: number;
  name: string;
  price: number;
  finalPrice?: number;
  image?: string;
  description?: string;
  specifications: {
    width: string;
    height: string;
    thickness: string;
  };
  details?: string;
  rating?: number; 
  ratingCount?: number; 
  discount: string; 
  offers?: string[]; 
  
}