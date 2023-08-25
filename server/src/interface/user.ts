import mongoose from "mongoose";

export interface Address {
    country: string;
    city: string;
    street: string;
    wards: string;
}

export interface CartItem {
    product: mongoose.Types.ObjectId;
    quantity: number;
    color: string;
    price: number;
    title: string;
}

export interface User extends Document {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    password: string;
    role: string;
    secondary_role: string;
    cart: CartItem[];
    address: Address[];
    wishlist: string[];
    isBlocked: boolean;
    refreshToken: string;
    passwordChangeAt: string;
    passwordResetToken: string;
    passwordResetExpires: string;
    registerToken: string;
    wallet: number;
    createdAt: Date;
    updatedAt: Date;
    isCorrectPassword(password: string): Promise<boolean>;
    createPasswordChangedToken(): string;
}
