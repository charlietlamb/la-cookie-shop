import {Button} from '~/components/ui/button';
import {useAtom} from 'jotai';
import {subscriptionAtom} from '~/store/bundle';
import {RadioGroup, RadioGroupItem} from '~/components/ui/radio-group';
import {cn} from '~/lib/utils';

export function BundlePlanSelector() {
  const [subscription, setSubscription] = useAtom(subscriptionAtom);
  const radioClassName =
    'border-green flex items-center w-full gap-2 p-2 border rounded-lg cursor-pointer bg-white hover:border-greenDark transition-all duration-300';
  const radioDotClassName = 'text-green border-green';
  return (
    <RadioGroup
      className="flex flex-col gap-2"
      value={subscription.toString()}
      onValueChange={(value) => setSubscription(value === 'true')}
    >
      <div
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
      </div>
      <div
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
      </div>
    </RadioGroup>
  );
}
