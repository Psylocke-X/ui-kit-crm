import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

import clsx from "clsx";

import styles from "./styles.module.scss";

export type ButtonVariant = "default" | "icon" | "icon-left" | "icon-right";
export type ButtonColor = "primary" | "white";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  as?: any;
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    as: Tag = "button",
    className,
    icon,
    variant = "default",
    color = "primary",
    children,
    ...rest
  } = props;
  console.log("styles:", styles);
  return (
    <Tag
      className={clsx(
        styles.button,
        `button--${variant}`,
        `button--${color}`,
        className,
      )}
      {...rest}
    >
      {(variant === "icon" || variant === "icon-left") && icon}
      {(variant === "default" ||
        variant === "icon-left" ||
        variant === "icon-right") &&
        children}
      {variant === "icon-right" && icon}
    </Tag>
  );
};
