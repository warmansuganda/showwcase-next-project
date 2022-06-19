import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button
      type="button"
      className="rounded-md bg-blue-600 px-5 py-3 font-mono text-lg text-white hover:bg-blue-700"
    >
      {children}
    </button>
  );
}

export default Button;
