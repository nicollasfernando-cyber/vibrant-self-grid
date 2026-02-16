import React from 'react';
import { cn } from '@/lib/utils';

interface ProductButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'default' | 'lg';
  children: React.ReactNode;
}

const ProductButton: React.FC<ProductButtonProps> = ({
  variant = 'primary',
  size = 'default',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'font-heading font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center',
        size === 'default' && 'px-6 py-3 text-sm',
        size === 'lg' && 'px-8 py-4 text-base',
        variant === 'primary' &&
          'bg-brand-red text-primary-foreground hover:brightness-110 shadow-lg hover:shadow-xl',
        variant === 'outline' &&
          'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background',
        variant === 'ghost' &&
          'text-muted-foreground hover:text-foreground',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ProductButton;
