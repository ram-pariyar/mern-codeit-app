import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./features/authSlice";
import countReducer from "./features/counterSlice";
import cartReducer from "./features/cartSlice";
import productFilterReducer from "./features/productFilterSlice";
import preferencesSlice from "./features/preferencesSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart", "preferences"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  counter: countReducer,
  cart: cartReducer,
  productFilter: productFilterReducer,
  preferences: preferencesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
