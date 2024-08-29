import {atom} from 'jotai';
import {cookieData, CookieData} from '~/data/cookieData';
import {atomWithLocalStorage} from './atomWithLocalStorage';
import {ProductVariant} from '@shopify/hydrogen/storefront-api-types';

export const bundleAtom = atomWithLocalStorage<BundleItem[]>('bundle', []);
export const selectedCookieAtom = atomWithLocalStorage<CookieData>(
  'selectedCookie',
  cookieData[0],
);

export type BundleItem = {
  cookie: CookieData;
  quantity: number;
};

export const bundleQuantityAtom = atom((get) =>
  get(bundleAtom).reduce((acc, box) => acc + box.quantity, 0),
);

export const individualItemsAtom = atom<CookieData[]>((get) =>
  get(bundleAtom).flatMap((box) => Array(box.quantity).fill(box.cookie)),
);

export const boxesAtom = atom<ProductVariant[]>([]);
export const selectedBoxAtom = atom<ProductVariant | null>(null);

export const MAX_QUANTITY = 10;
export const PETITE_BOX_ID = 'gid://shopify/ProductVariant/41776600481861';
