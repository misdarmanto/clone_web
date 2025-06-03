import React from "react";
import { type FieldError, type UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  error,
  registration,
}) => {
  return (
    <div>
      <label className="block font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md p-2 focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-400" : "focus:ring-blue-400"
        }`}
        {...registration}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};
