"use client";

import { Provider } from "react-redux";
import { store, persistor } from "./stores";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "@/app/components/Spinner";

export const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="relative flex justify-center items-center top-50">
            <Spinner className="w-6 h-6 fill-primary" />
          </div>
        }
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};
