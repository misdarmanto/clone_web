import  { type ReactNode } from 'react';

type ButtonVariant = 'contained' | 'outlined' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  className = '',
}: ButtonProps) {
  const baseClasses = 'rounded-md flex items-center justify-center transition-all duration-200 font-medium';
  
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-6 py-2',
    large: 'px-8 py-3 text-lg',
  };
  
  const colorClasses = {
    contained: {
      primary: 'bg-orange-500 hover:bg-orange-700 text-white',
      secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
      success: 'bg-green-600 hover:bg-green-700 text-white',
      danger: 'bg-red-600 hover:bg-red-700 text-white',
      warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
      info: 'bg-cyan-500 hover:bg-cyan-600 text-white',
    },
    outlined: {
      primary: 'border border-orange-600 text-orange-600 hover:bg-orange-50',
      secondary: 'border border-gray-600 text-gray-600 hover:bg-gray-50',
      success: 'border border-green-600 text-green-600 hover:bg-green-50',
      danger: 'border border-red-600 text-red-600 hover:bg-red-50',
      warning: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-50',
      info: 'border border-cyan-500 text-cyan-500 hover:bg-cyan-50',
    },
    text: {
      primary: 'text-orange-600 hover:bg-orange-50',
      secondary: 'text-gray-600 hover:bg-gray-50',
      success: 'text-green-600 hover:bg-green-50',
      danger: 'text-red-600 hover:bg-red-50',
      warning: 'text-yellow-500 hover:bg-yellow-50',
      info: 'text-cyan-500 hover:bg-cyan-50',
    },
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const buttonClasses = [
    baseClasses,
    sizeClasses[size],
    colorClasses[variant][color],
    disabledClasses,
    widthClasses,
    className,
  ].join(' ');
  
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
}
