import React, { ReactNode } from "react";

interface UIProps {
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

export const Input: React.FC<UIProps> = ({ className = "", ...props }) => (
  <input
    className={`p-2 border border-gray-600 rounded-lg bg-gray-700 text-white ${className}`}
    {...props}
  />
);

export const Button: React.FC<UIProps> = ({ className = "", children, ...props }) => (
  <button
    className={`py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const Card: React.FC<UIProps> = ({ className = "", children }) => (
  <div className={`bg-gray-800 p-4 rounded-2xl shadow-lg ${className}`}>{children}</div>
);

export const CardContent: React.FC<UIProps> = ({ className = "", children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export const Textarea: React.FC<UIProps> = ({ className = "", ...props }) => (
  <textarea
    className={`w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white resize-none ${className}`}
    {...props}
  />
);

const UIComponents = { Input, Button, Card, CardContent, Textarea };
export default UIComponents;
