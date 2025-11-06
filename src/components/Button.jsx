import React from 'react';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  onClick, 
  children,
  className = '',
  ...rest 
}) => {
  const base = 'inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500'
  };
  const sizes = { sm: 'px-2 py-1 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg' };
  const state = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${state} ${className}`}
      disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;