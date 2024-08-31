import {Button} from '~/components/ui/button';
import {useAtom} from 'jotai';
import {subscriptionAtom} from '~/store/bundle';

export function BundlePlanSelector() {
  const [subscription, setSubscription] = useAtom(subscriptionAtom);
  return (
    <>
      <Button
        variant={subscription ? 'outline' : 'default'}
        onClick={() => setSubscription(false)}
      >
        One Time Purchase
      </Button>
      <Button
        variant={subscription ? 'default' : 'outline'}
        onClick={() => setSubscription(true)}
      >
        Subscription
      </Button>
    </>
  );
}
