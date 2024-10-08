import {CookieData} from '~/data/cookieData';
import {BundleItem} from '~/store/bundle';

export function addToBundle(
  bundle: BundleItem[],
  cookie: CookieData,
): BundleItem[] {
  const existingItem = bundle.find((item) => item.cookie.name === cookie.name);
  if (existingItem) {
    return bundle.map((item) =>
      item.cookie.name === cookie.name
        ? {...item, quantity: item.quantity + 1}
        : item,
    );
  }
  return [...bundle, {cookie, quantity: 1}];
}
