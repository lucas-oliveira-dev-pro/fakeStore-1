"use client";

import React, { Suspense } from "react";
import { paymentMfe } from "@/lib/paymentMfe";
import { useAppSelector } from "@/lib/globalState/hooks";
import { Product } from "@/types/product";
import styles from "./page.module.scss";

interface PaymentProps {
  product?: Product;
}

type PaymentRemoteModule = {
  default: React.ComponentType<PaymentProps>;
};

const Payment = React.lazy(async () => {
  const remoteModule =
    await paymentMfe.loadRemote<PaymentRemoteModule>("payment/Payment");

  if (!remoteModule) {
    throw new Error("Não foi possível carregar o Payment MFE.");
  }

  return {
    default: remoteModule.default,
  };
});

export default function Checkout() {
  const product = useAppSelector((state) => state.buy.item);

  return (
    <Suspense fallback={<div>Carregando pagamento...</div>}>
      <div className={styles.paymentWrapper}>
        <Payment product={product} />
      </div>
    </Suspense>
  );
}
