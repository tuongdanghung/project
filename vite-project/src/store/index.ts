import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./reducers/usersSlice";
import productSlice from "./reducers/productSlice";
import orderSlice from "./reducers/orderSlice";
export const store = configureStore({
    reducer: {
        userReducer: usersSlice,
        productReducer: productSlice,
        orderReducer: orderSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
