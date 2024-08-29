import {atom} from 'jotai';
import {cookieData, CookieData} from '~/data/cookieData';
import {atomWithLocalStorage} from './atomWithLocalStorage';
import {Product, ProductVariant} from '@shopify/hydrogen/storefront-api-types';

export const bundleAtom = atomWithLocalStorage<BundleItem[]>('bundle', []);

export type BundleItem = {
  cookie: CookieData;
  quantity: number;
};

export const bundleQuantityAtom = atom((get) =>
  get(bundleAtom).reduce((acc, box) => acc + box.quantity, 0),
);

export const isPetiteBoxSelectedAtom = atom(
  (get) => get(selectedBoxAtom)?.id === PETITE_BOX_ID,
);

export const bundleSelectedAtom = atomWithLocalStorage<CookieData>(
  'bundleSelected',
  cookieData[0],
);

export const boxesAtom = atom<ProductVariant[]>([]);
export const selectedBoxAtom = atom<ProductVariant | null>(null);

export const MAX_PETITE_QUANTITY = 5;
export const MAX_GRANDE_QUANTITY = 10;
export const PETITE_BOX_ID = 'gid://shopify/ProductVariant/41776600481861';
