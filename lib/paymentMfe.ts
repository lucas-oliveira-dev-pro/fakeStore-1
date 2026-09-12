import React from "react";
import { createInstance } from "@module-federation/enhanced/runtime";

export const paymentMfe = createInstance({
  name: "fakestore",
  remotes: [
    {
      name: "payment",
      entry: "http://localhost:3001/varRemoteEntry.js",
      type: "var",
      entryGlobalName: "payment",
    },
  ],
  shared: {
    react: {
      version: React.version,
      scope: "default",
      lib: () => React,
      shareConfig: {
        singleton: true,
        requiredVersion: false,
      },
    },
  },
});