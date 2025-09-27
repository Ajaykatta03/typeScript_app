export class WishlistInterface {
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
  discount!: string; 
  offers?: string[]; 

  constructor(
    id: number,
    name: string,
    price: number,
    specifications: { width: string; height: string; thickness: string },
    discount: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.specifications = specifications;
    this.discount = discount || '';
  }
}