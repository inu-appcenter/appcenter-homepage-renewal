import React from 'react';

interface FormInputProps {
  id?: string;
  label?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMessage?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  error,
  errorMessage,
}) => (
  <div className="flex-1">
    <label htmlFor={id} className="block font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      className={`w-full border px-3 py-2 ${
        error ? "border-red-500" : "border-gray-300"
      } rounded-md shadow-sm focus:outline-none focus:ring-2`}
      aria-invalid={error}
    />
    {error && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
  </div>
);


export default FormInput;
