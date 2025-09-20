export interface ItemType {
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
export const calculateFinalPrice = (price: number, discount: string): number => {
  return discount
    ? parseFloat((price - (price * parseFloat(discount) / 100)).toFixed(2))
    : price;
};

export const getItemDetails = (itemsData: ItemType[] | undefined, id: string) => {
  const itemId = Number(id);
  // Find the item by id
  const item = itemsData?.find((i) => i.id === itemId);
  if (!item) return;
  // Calculate final price using the new function
  const finalPrice = calculateFinalPrice(item.price, item.discount);
  return { ...item, finalPrice };
};