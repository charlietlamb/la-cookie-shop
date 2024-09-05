import {motion} from 'framer-motion';
import {Button} from '~/components/ui/button';
import {useAtom, useAtomValue} from 'jotai';
import {selectedBoxAtom, subscriptionAtom} from '~/store/bundle';
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
  const selectedBox = useAtomValue(selectedBoxAtom);
  console.log(selectedBox);
  const [subscription, setSubscription] = useAtom(subscriptionAtom);
  const radioClassName =
    'border-green flex items-center w-full gap-2 p-2 border rounded-lg cursor-pointer bg-white hover:border-greenDark transition-all duration-300';
  const radioDotClassName = 'text-green border-green';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      className="bg-greenLight px-8"
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
          <div className="flex items-center justify-between w-full gap-2">
            One Time Purchase
            <p className="text-sm">
              €
              {parseFloat(
                selectedBox?.variants.nodes[0]?.price.amount || '0',
              ).toFixed(2)}
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className={cn(radioClassName, subscription && 'border-greenDark')}
          onClick={() => setSubscription(true)}
        >
          <RadioGroupItem value="true" className={cn(radioDotClassName)}>
            <div>Subscribe & Save 20%</div>
          </RadioGroupItem>
          <div className="flex items-center justify-between w-full gap-2">
            Subscribe & Save 20%
            <div className="flex items-center gap-2">
              <p className="text-sm font-[200] line-through">
                €
                {parseFloat(
                  selectedBox?.variants.nodes[0]?.price.amount || '0',
                )}
              </p>
              <p className="text-sm">
                €
                {(
                  parseFloat(
                    selectedBox?.variants.nodes[0]?.price.amount || '0',
                  ) * 0.8
                ).toFixed(2)}
              </p>
            </div>
          </div>
        </motion.div>
      </RadioGroup>
    </motion.div>
  );
}
