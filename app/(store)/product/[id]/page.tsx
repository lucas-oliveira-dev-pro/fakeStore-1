import { api } from "@/lib/api/api";
import { Product as ProductType } from "@/types/product";
import Image from "next/image";
import "./page.scss";
import { formatNumberToCurrency } from "@/helpers/format";
import { Button } from "@/components/Button";
import AddToCartButton from "./AddToCartButton";
import BackButton from "@/components/BackButton/BackButton";
import BuyButton from "@/components/BuyButton/BuyButton";

export default async function Product({ params }: { params: { id: string } }) {
  const productId = params.id;
  const res = await api.get(`products/${productId}`);
  const product: ProductType = res.data;
  return (
    <>
      <BackButton />
      <section className="product-wrapper">
        <div className="product-img-container">
          <div className="product-img">
            <Image fill src={product.image} alt={product.title} />
          </div>
        </div>
        <div className="product-details padding-top-x-large">
          <h1 className="product-title text-xx-large">{product.title}</h1>
          <p className="text-x-large">{product.description}</p>
          <div className="product-price-wrapper">
            <span className="product-price text-xxx-large">
              {formatNumberToCurrency(product.price)}
            </span>
            <AddToCartButton product={product} />
            <BuyButton product={product}/>
          </div>
        </div>
      </section>
    </>
  );
}
