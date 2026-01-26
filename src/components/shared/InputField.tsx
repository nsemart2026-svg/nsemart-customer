import { InputHTMLAttributes, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: string;
  icon?: boolean | ReactNode;
  flag?: boolean;
  onIconClick?: () => void;
  register?: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField = ({
  label,
  id,
  type = "text",
  placeholder,
  defaultValue,
  error,
  icon,
  flag,
  onIconClick,
  register,
  className = "",
  ...rest
}: InputFieldProps) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-1 text-foreground font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={`w-full border border-input bg-background rounded-md px-4 py-[10px] pr-10 
            focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring 
            placeholder:text-muted-foreground text-foreground ${className}`}
          {...(register || {})}
          {...rest}
        />

        {/* Icon */}
        {icon && typeof icon !== "boolean" && (
          <button
            type="button"
            className="absolute right-2 top-2 p-1 text-muted-foreground hover:text-foreground"
            onClick={onIconClick}
          >
            {icon}
          </button>
        )}

        {/* Flag */}
        {flag && <span className="absolute right-2 top-2 text-sm">🇺🇸</span>}
      </div>

      {/* Error */}
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
