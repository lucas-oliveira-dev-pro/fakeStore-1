"use client";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "./store";
import { loadCart } from "./cartSlice";

export default function CartPersistence() {
  const dispatch = useDispatch<AppDispatch>();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const ref = useRef<boolean>(false);

  // Carrega o carrinho quando a aplicação inicia
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);

        dispatch(loadCart(parsedCart));
      } catch {
        localStorage.removeItem("cart");
      }
    }
  }, [dispatch]);

  // Salva alterações no localStorage
  useEffect(() => {
    if (ref.current) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      ref.current = true
    }
  }, [cartItems]);

  return <></>;
}
