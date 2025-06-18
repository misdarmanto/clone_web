import React from "react";
import { type FieldError, type UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: FieldError;
  registration?: UseFormRegisterReturn;
  fullWidth?: boolean;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  error,
  registration,
  fullWidth = false,
  className = "",
  startIcon,
  endIcon,
  onChange,
  value,
}) => {
  return (
    <div className={clsx("flex flex-col gap-1", fullWidth && "w-full")}>
      <label className="block font-medium">{label}</label>
      <div className={clsx("relative", fullWidth && "w-full")}>
        {startIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            {startIcon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={clsx(
            "border rounded-md p-2 focus:outline-none focus:ring-1",
            startIcon && "pl-10",
            endIcon && "pr-10",
            fullWidth && "w-full",
            error
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-gray-400",
            className
          )}
          {...registration}
          onChange={registration?.onChange ?? onChange}
          value={value}
        />
        {endIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {endIcon}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};
