import mongoose, { Document } from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { User } from "../interface/user";

const userSchema = new mongoose.Schema<User>(
    {
        firstName: {
            type: String,
            required: true,
            index: true,
        },
        lastName: {
            type: String,
            required: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        mobile: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        wallet: {
            type: Number,
            default: 0,
        },
        role: {
            type: String,
            enum: ["1", "2"],
            default: "2",
        },
        secondary_role: {
            type: String,
            enum: ["1", "2"],
            default: "2",
        },
        cart: [
            {
                product: { type: mongoose.Types.ObjectId, ref: "Product" },
                quantity: { type: Number },
                ram: { type: Number },
                capacity: { size: { type: Number }, percent: { type: Number } },
                color: { type: String },
                totalPrice: { type: Number },
            },
        ],
        address: [
            {
                country: { type: String },
                city: { type: String },
                street: { type: String },
                wards: { type: String },
            },
        ],
        wishlist: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
        isBlocked: {
            type: Boolean,
            default: false,
        },
        refreshToken: {
            type: String,
        },
        passwordChangeAt: { type: String },
        passwordResetToken: { type: String },
        passwordResetExpires: { type: String },
        registerToken: { type: String },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    const salt = bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods = {
    isCorrectPassword: async function (password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    },
    createPasswordChangedToken: function (): string {
        const resetToken = crypto.randomBytes(32).toString("hex");
        this.passwordResetToken = crypto
            .createHash("sha256")
            .update(resetToken)
            .digest("hex");
        this.passwordResetExpires = (Date.now() + 15 * 60 * 1000).toString();
        return resetToken;
    },
};

const UserModel = mongoose.model<User>("User", userSchema);
module.exports = UserModel;
