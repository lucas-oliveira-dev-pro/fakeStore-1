"use client";

import React from "react";
import { Button } from "../Button";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/")} className="back-button">
      Voltar
    </Button>
  );
}

export default BackButton;
