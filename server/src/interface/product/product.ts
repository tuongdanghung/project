export interface Ram {
    size: number;
}
export interface Brand {
    size: number;
}
export interface Capacity {
    size: number;
    percent: number;
}
export interface Color {
    color: string;
}

export interface Product extends Document {
    title: string;
    slug: string;
    description: string;
    brand: string;
    price: number;
    category: string;
    quantity: number;
    sold: number;
    image: string;
    color: Color[];
    ram: Ram[];
    origin: string;
    capacity: Capacity[];
    rating: any;
    totalRating: number;
    seller: number;
}
