"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/globalState/cartSlice";
import { AppDispatch } from "@/lib/globalState/store";
import { Product } from "@/types/product";
import { Button } from "@/components/Button";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Button className="add-to-cart" onClick={handleAddToCart}>
      Adicionar ao carrinho
    </Button>
  );
}