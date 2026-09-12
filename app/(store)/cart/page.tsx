"use client";

import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import { Link } from "@/components/Link";
import { formatNumberToCurrency } from "@/helpers/format";
import { removeFromCart } from "@/lib/globalState/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/globalState/hooks";
import Image from "next/image";
import React from "react";
import "./page.scss";
import BackButton from "@/components/BackButton/BackButton";

function Cart() {
  const products = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  return (
    <>
      <BackButton />
      <section className="products-wrapper">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-card__grid-row-1 padding-small">
              <div className="product-card__img">
                <Image fill src={product.image} alt={product.title} />
              </div>
            </div>

            <div className="product-card__grid-row-2 padding-small">
              <h1 className="product-card__title text-medium">
                {product.title}
              </h1>
              <div>
                <span className="product-card__price text-x-large">
                  {formatNumberToCurrency(product.price)}
                </span>
                <Dropdown title="+">
                  <Button style="secondary" className="detail-button" widthFull>
                    <Link href={`/product/${product.id}`}>Detalhes</Link>
                  </Button>
                  <Button
                    style="secondary"
                    className=""
                    widthFull
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    Remover
                  </Button>
                </Dropdown>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Cart;
