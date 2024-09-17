import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};

const variants = {
  fill: {
    teal_A400: "bg-teal-a400 text-black-900",
  },
  outline: {
    white_A700: "border-white-a700 border border-solid text-white-a700",
  },
};

const sizes = {
  sm: "h-[34px] px-2.5 text-[24px]",
  xs: "h-[34px] px-[34px] text-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["teal_A400", "white_A700"]),
};

export { Button };
