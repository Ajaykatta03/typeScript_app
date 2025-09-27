export class CartInterface {
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
        this.finalPrice = finalPrice;
        this.image = image;
        this.description = description;
        this.details = details;
        this.rating = rating;
        this.ratingCount = ratingCount;
        this.offers = offers;
    }
}