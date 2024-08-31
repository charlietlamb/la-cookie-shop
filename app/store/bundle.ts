import {atom} from 'jotai';
import {cookieData, CookieData} from '~/data/cookieData';
import {atomWithLocalStorage} from './atomWithLocalStorage';
import {
  ProductVariantFragment,
  ProductWithPlanFragment,
} from 'storefrontapi.generated';

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

export const boxesAtom = atom<ProductWithPlanFragment[]>([]);
export const selectedBoxAtom = atom<ProductWithPlanFragment | null>(null);
export const selectedVariantAtom = atom<ProductVariantFragment | null>(
  (get) => get(selectedBoxAtom)?.variants.nodes[0] ?? null,
);

export const subscriptionAtom = atom<boolean>(false);

export const MAX_QUANTITY = 10;
