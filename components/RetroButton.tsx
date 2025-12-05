import React from 'react';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const RetroButton: React.FC<RetroButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-2.5 font-mono font-bold text-base uppercase tracking-wider transition-transform active:translate-y-1 border-2 border-lj-dark rounded-sm shadow-[4px_4px_0px_0px_rgba(28,22,20,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(28,22,20,1)]";
  
  const variants = {
    primary: "bg-lj-rust text-lj-paper hover:bg-[#c24e13]",
    secondary: "bg-lj-paper text-lj-brown hover:bg-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};