import {CookieData} from '~/data/cookieData';
import {BundleItem} from '~/store/bundle';

export function addToBundle(
  bundle: BundleItem[],
  cookie: CookieData,
): BundleItem[] {
  console.log(bundle);

  const existingItem = bundle.find((item) => item.cookie.id === cookie.id);
  if (existingItem) {
    return bundle.map((item) =>
      item.cookie.id === cookie.id
        ? {...item, quantity: item.quantity + 1}
        : item,
    );
  }
  return [...bundle, {cookie, quantity: 1}];
}
