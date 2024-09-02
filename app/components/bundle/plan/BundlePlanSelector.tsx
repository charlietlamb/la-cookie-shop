import {motion} from 'framer-motion';
import {Button} from '~/components/ui/button';
import {useAtom} from 'jotai';
import {subscriptionAtom} from '~/store/bundle';
import {RadioGroup, RadioGroupItem} from '~/components/ui/radio-group';
import {cn} from '~/lib/utils';

const containerVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
};

const itemVariants = {
  hidden: {opacity: 0, x: -20},
  visible: {opacity: 1, x: 0, transition: {duration: 0.4, delay: 0.2}},
};

export function BundlePlanSelector() {
  const [subscription, setSubscription] = useAtom(subscriptionAtom);
  const radioClassName =
    'border-green flex items-center w-full gap-2 p-2 border rounded-lg cursor-pointer bg-white hover:border-greenDark transition-all duration-300';
  const radioDotClassName = 'text-green border-green';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
    >
      <RadioGroup
        className="flex flex-col gap-2"
        value={subscription.toString()}
        onValueChange={(value) => setSubscription(value === 'true')}
      >
        <motion.div
          variants={itemVariants}
          className={cn(
            radioClassName,
            !subscription && 'border-greenDark hover:border-green',
          )}
          onClick={() => setSubscription(false)}
        >
          <RadioGroupItem value="false" className={radioDotClassName}>
            One Time Purchase
          </RadioGroupItem>
          One Time Purchase
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={cn(radioClassName, subscription && 'border-greenDark')}
          onClick={() => setSubscription(true)}
        >
          <RadioGroupItem value="true" className={radioDotClassName}>
            Subscription - Delivered every 4 weeks
          </RadioGroupItem>
          <div className="flex flex-col">
            Subscription - Delivered every 4 weeks
            <p className="text-sm font-light">Edit, skip or cancel anytime</p>
          </div>
        </motion.div>
      </RadioGroup>
    </motion.div>
  );
}
