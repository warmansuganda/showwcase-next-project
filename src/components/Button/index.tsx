import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return <button type="button">{children}</button>;
}

export default Button;
