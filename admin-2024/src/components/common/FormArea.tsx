import React from 'react';

interface FormAreaProps {
  id?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  errorMessage?: string;
  rows?: number;
}

const FormArea: React.FC<FormAreaProps> = ({
  id,
  label,
  value,
  onChange,
  error,
  errorMessage,
  rows,
}) => (
  <div>
    <label htmlFor={id} className='block font-medium text-gray-700'>
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`w-full border px-3 py-2 ${
        error ? 'border-red-500' : 'border-gray-300'
      } rounded-md shadow-sm focus:outline-none focus:ring-2`}
      aria-invalid={error}
    />
    {error && <p className='mt-1 text-sm text-red-500'>{errorMessage}</p>}
  </div>
);

export default FormArea;
