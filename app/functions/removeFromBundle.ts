import {CookieData} from '~/data/cookieData';
import {BundleItem} from '~/store/bundle';

export function removeFromBundle(
  bundle: BundleItem[],
  cookie: CookieData,
): BundleItem[] {
  return bundle
    .map((item) => {
      if (item.cookie.name === cookie.name) {
        if (item.quantity > 1) {
          return {...item, quantity: item.quantity - 1};
        }
        return null;
      }
      return item;
    })
    .filter(Boolean) as BundleItem[];
}
