import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';

import {cn} from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center md:whitespace-nowrap rounded-none text-xl font-bold ring-offset-background  transition-all duration-600 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-transparent border-2 rounded-none border-brown text-brown hover:bg-brown/20 hover:rounded-none',
        hero: 'bg-transparent font-hanken uppercase border rounded-none font-[200] p-size border-brown text-brown hover:text-dark hover:border-dark hover:scale-105 duration-600',
        actionSand:
          'bg-transparent font-hanken uppercase border rounded-none font-[200] border-sand text-sand hover:bg-sand hover:text-white duration-600',
        actionWhite:
          'bg-transparent font-hanken uppercase border rounded-none font-[200] border-white text-white hover:bg-white hover:text-dark duration-600',
        actionSandInverse:
          'bg-sand font-hanken uppercase border rounded-none font-[200] border-sand text-white hover:bg-transparent hover:text-sand duration-600',
        actionDarkInverse:
          'bg-dark font-hanken uppercase border rounded-none font-[200] border-dark text-white hover:bg-transparent hover:text-dark duration-600',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'text-sand',
        ghostBrown: 'text-brown',
        sand: 'bg-sand text-white font-cardo uppercase flex items-center leading-none',
        link: 'text-primary underline-offset-4 hover:underline',
        pointer: 'bg-transparent text-sand border-sand border',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-none px-3',
        lg: 'h-11 rounded-none px-8',
        xl: 'lg:h-14 md:h-12 h-12 rounded-none px-10',
        icon: 'h-10 w-10',
        auto: 'w-auto h-auto',
        black: 'h4-size px-4 py-2 rounded-none h-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({variant, size, className}))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export {Button, buttonVariants};
