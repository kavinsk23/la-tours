import React from "react";
import { ArrowRight, Loader2 } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type = "button",
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-ceylon-500 to-ceylon-600 text-white hover:from-ceylon-600 hover:to-ceylon-700 hover:shadow-button-hover focus:ring-ceylon-500 hover:scale-105",
    secondary:
      "bg-gradient-to-r from-midnight to-midnight-light text-white hover:from-midnight-light hover:to-slate hover:shadow-card-hover focus:ring-midnight hover:scale-105",
    outline:
      "border-2 border-ceylon-500 text-ceylon-600 hover:bg-ceylon-500 hover:text-white focus:ring-ceylon-500 hover:shadow-button",
    ghost:
      "text-midnight hover:bg-ceylon-50 hover:text-ceylon-600 focus:ring-ceylon-500",
    link: "text-ceylon-600 hover:text-ceylon-700 underline-offset-4 hover:underline focus:ring-ceylon-500",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm rounded-lg gap-2",
    md: "px-4 py-3 text-base rounded-xl gap-2",
    lg: "px-6 py-4 text-lg rounded-xl gap-3",
    xl: "px-8 py-5 text-xl rounded-2xl gap-3",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  const renderIcon = () => {
    if (loading) {
      return <Loader2 className="w-4 h-4 animate-spin" />;
    }
    if (icon) {
      return icon;
    }
    if (variant === "primary" || variant === "secondary") {
      return (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      );
    }
    return null;
  };

  const iconElement = renderIcon();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${combinedClasses} group`}
    >
      {iconPosition === "left" && iconElement}
      <span>{children}</span>
      {iconPosition === "right" && iconElement}
    </button>
  );
};

export default Button;
