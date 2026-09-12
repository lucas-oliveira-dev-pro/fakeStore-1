"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";
import CartPersistence from "./CartPersistence";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // const storeRef = useRef<AppStore>();
  // if (!storeRef.current) {
  //   storeRef.current = makeStore();
  // }

  return (
    <Provider store={makeStore()}>
      <CartPersistence />
      {children}
    </Provider>
  );
}
