"use client";

import { useAppSelector } from "@/lib/globalState/hooks";
import React from "react";
import styles from "./quantityInCart.module.scss"
import { Button } from "../Button";
import { useRouter } from "next/navigation";

function QuantityInCartButton() {
    const router = useRouter();
  
  const items = useAppSelector((state) => state.cart.items);
  return items.length ? <Button style={'secondary-green'} onClick={() => router.push('/cart')} className={styles.quantityInCart}> {items.length} ite{items.length > 1 ? "ns" : "m"} no carrinho</Button> : <></>;
}

export default QuantityInCartButton;
