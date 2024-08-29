import React, {useState} from 'react';
import {Button, ButtonProps} from '~/components/ui/button';
import {ArrowRightIcon, Cookie} from 'lucide-react';
import {AnimatePresence, motion} from 'framer-motion';
import {cn} from '~/lib/utils';

export default function CookieButton({
  variant,
  className,
  onClick,
  disabled = false,
  children,
}: {
  variant: string;
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Button
      variant={variant as ButtonProps['variant']}
      className={cn('group gap-1', className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <AnimatePresence>
        {hover && (
          <motion.div
            transition={{duration: 0.5}}
            initial={{x: '100%', opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: '100%', opacity: 0, transition: {duration: 0.3}}}
          >
            <Cookie strokeWidth={1} />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}
