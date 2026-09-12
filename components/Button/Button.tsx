"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.scss";

export type buttonStyles =
  | "primary"
  | "primary-blue"
  | "secondary"
  | "secondary-blue"
  | "secondary-green"
  | "bluish-green-secondary";
export type buttonSize = "small" | "medium" | "large";
type Props = {
  children: ReactNode;
  style?: buttonStyles;
  widthFull?: boolean;
  size?: buttonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className,
  style = "primary",
  widthFull,
  size = "medium",
  ...props
}: Props) => {
  return (
    <button
      className={`${className} ${"button--" + style} button button--${size} ${
        widthFull && "button--width-full"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
