export interface Address {
    city: string;
    district: string;
    wards: string;
}
export interface Order {
    payment: number;
    total: number;
    orderBy: any;
    status: string;
    product: any;
    address: Address[];
    shipping: number;
    mobile: Number;
    fullName: String;
}
