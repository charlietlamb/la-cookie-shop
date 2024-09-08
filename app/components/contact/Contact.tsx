import {motion} from 'framer-motion';
import {Mail, Phone, MapPin} from 'lucide-react';
import {MetaFunction} from '@remix-run/react';
import {useOpenStore} from '~/store/open';
import useWindowDimensions from '../utils/useWindowDimensions';
import useSetHeaderOpen from '../utils/useSetHeaderOpen';

export const meta: MetaFunction = () => {
  return [{title: 'Contact Us - La Cookie Shop'}];
};

export default function Contact() {
  const {setHeaderOpen} = useOpenStore();
  const {height} = useWindowDimensions();
  useSetHeaderOpen(setHeaderOpen, height);
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white">
      <motion.h1
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="h1-size font-cardo text-dark mb-12 text-center"
      >
        Get in Touch
      </motion.h1>

      <motion.div
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.2}}
        className="w-full max-w-2xl px-4"
      >
        <img
          src="/images/cookie-mag-tea.jpeg"
          alt="La Cookie Shop"
          className="object-cover w-full h-64 mb-8 rounded-none shadow-md"
        />

        <div className="space-y-6">
          <ContactItem
            icon={<Mail />}
            text="contact@lacookieshop.com"
            delay={0.4}
          />
          <ContactItem icon={<Phone />} text="+351 123 456 789" delay={0.5} />
          <ContactItem
            icon={<MapPin />}
            text="Rua das Flores 123, Lisbon, Portugal"
            delay={0.6}
          />
        </div>
      </motion.div>
    </div>
  );
}

function ContactItem({
  icon,
  text,
  delay,
}: {
  icon: React.ReactNode;
  text: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.6, delay}}
      className="text-dark flex items-center gap-3"
    >
      {icon}
      <span>{text}</span>
    </motion.div>
  );
}
