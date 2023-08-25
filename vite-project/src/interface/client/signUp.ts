export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export interface SignUpInterface {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    mobile: number;
    status: string;
    role: number;
    address: Address[];
    wallet: number;
}
