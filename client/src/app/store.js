import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from './slices/auth'

export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    //    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
    devTools: true
})

setupListeners(store.dispatch)