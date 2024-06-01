import React, { MouseEventHandler } from "react";

interface ButtonProps {
  style?: React.CSSProperties;
  size?: "small" | "medium";
  type?: "outline" | "variant";
  label: string;
  icon?: React.ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const AppButton = (props: ButtonProps) => {
  const {
    style,
    size = "small",
    type = "variant",
    label = "button",
    icon,
    handleClick,
  }: ButtonProps = props;

  const sizes = {
    small: "h-8 px-4 text-sm rounded-lg",
    medium: "h-10 px-4  rounded-lg",
  };

  const types = {
    outline: `border border-gray-500 bg-white hover:bg-gray-500 hover:text-white transition-all shadow`,
    variant: `bg-midnightBlue text-white opacity-90 hover:opacity-100 transition-all shadow`,
  };

  return (
    <button
      className={`flex items-center gap-2 ${sizes[size]} ${types[type]} cursor-pointer`}
      style={style}
      onClick={handleClick}
    >
      {label}
      {icon && (
        <div className="flex h-5 w-5 items-center justify-center">{icon}</div>
      )}
    </button>
  );
};

export default AppButton;
