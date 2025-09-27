export class CategoryInterface {
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

    constructor(
        id: number,
        name: string,
        description: string,
        price: number,
        image?: string,
        originalPrice?: number,
        discount?: number,
        rating?: number,
        ratingCount?: number,
        color?: string,
        unavailable?: boolean
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.originalPrice = originalPrice;
        this.discount = discount;
        this.rating = rating;
        this.ratingCount = ratingCount;
        this.color = color;
        this.unavailable = unavailable;
    }
}