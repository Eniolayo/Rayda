import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { featuredItemApi } from "@features/featuredItemApi";

export const store = configureStore({
  reducer: {
    [featuredItemApi.reducerPath]: featuredItemApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(featuredItemApi.middleware),
});

setupListeners(store.dispatch);
