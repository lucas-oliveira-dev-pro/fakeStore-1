"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/globalState/cartSlice";
import { AppDispatch } from "@/lib/globalState/store";
import { Product } from "@/types/product";
import { Button } from "@/components/Button";
import { buy } from "@/lib/globalState/buySlice";
import { useRouter } from "next/navigation";

interface BuyButtonProps {
  product: Product;
}

export default function BuyButton({
  product,
}: BuyButtonProps) {
  const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
  

  const handleBuy = () => {
    dispatch(buy({...product, quantity: 1}));
    router.push("/checkout")
  };

  return (
    <Button style={"primary-blue"} className="add-to-cart" onClick={handleBuy}>
      Comprar
    </Button>
  );
}