import {Link} from '@remix-run/react';
import {motion} from 'framer-motion';
import {headerAtom} from '~/store/header';
import {useSetAtom} from 'jotai';
import {Separator} from '~/components/ui/separator';

export default function HeaderPopoverContentItem({
  to,
  title,
  image,
  index,
}: {
  to: string;
  title: string;
  image: string;
  index: number;
}) {
  const setHeader = useSetAtom(headerAtom);
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5, delay: 0.2 * (index + 1)}}
    >
      <Link
        to={to}
        className="flex flex-col items-center gap-2"
        onClick={() => setHeader(null)}
      >
        <div className="border-brown w-full h-40 border">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
        <Separator className="bg-brown" />
        <h4 className="font-cardo h4-size text-brown uppercase">{title}</h4>
      </Link>
    </motion.div>
  );
}
