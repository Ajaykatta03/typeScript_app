// ...existing code...
export class ItemInterface {
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

    constructor(
        id: number,
        name: string,
        price: number,
        discount: string,
        specifications: { width: string; height: string; thickness: string },
        finalPrice?: number,
        image?: string,
        description?: string,
        details?: string,
        rating?: number,
        ratingCount?: number,
        offers?: string[]
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.specifications = specifications;
        this.finalPrice = finalPrice ?? this.calculateFinalPrice();
        this.image = image;
        this.description = description;
        this.details = details;
        this.rating = rating;
        this.ratingCount = ratingCount;
        this.offers = offers;
    }

    private calculateFinalPrice(): number {
        return this.discount
            ? parseFloat((this.price - (this.price * parseFloat(this.discount) / 100)).toFixed(2))
            : this.price;
    }
}

// export const getItemDetails = (itemsData: ItemInterface[] | undefined, id: string) => {
//   const itemId = Number(id);
//   // Find the item by id
//   const item = itemsData?.find((i) => i.id === itemId);
//   if (!item) return;
//   // Calculate final price using the new function
//   const finalPrice = calculateFinalPrice(item.price, item.discount);
//   return { ...item, finalPrice };
// };
