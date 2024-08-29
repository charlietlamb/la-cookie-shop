import {BundleItem} from '~/store/bundle';

export function getOrderDetails(bundle: BundleItem[]) {
  let orderString = '';
  bundle.forEach((item) => {
    orderString += `${item.cookie.name} - ${item.quantity}`;
    if (bundle.indexOf(item) < bundle.length - 1) orderString += ', ';
  });
  return orderString;
}
