import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from '@remix-run/react';
import Bundle from '~/components/bundle/Bundle';
import {COLLECTION_QUERY} from '~/graphql/index/CollectionQuery';
import {boxesAtom, selectedBoxAtom} from '~/store/bundle';
import {useSetAtom} from 'jotai';
import {useEffect} from 'react';
import {PRODUCT_QUERY} from '~/routes/products.$handle';
import {PRODUCT_SELLING_PLAN_QUERY} from '~/components/bundle/graphql/ProductSellingPlanQuery';
import {ProductWithPlanFragment} from 'storefrontapi.generated';
export const meta: MetaFunction = () => {
  return [{title: 'La Cookie Shop'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;

  const {product: petite} = await storefront.query(PRODUCT_SELLING_PLAN_QUERY, {
    variables: {
      handle: 'la-cookie-box-petite',
      selectedOptions: [],
    },
  });
  const {product: grande} = await storefront.query(PRODUCT_SELLING_PLAN_QUERY, {
    variables: {
      handle: 'la-cookie-shop-box-grande',
      selectedOptions: [],
    },
  });
  return defer({petite, grande});
}

export default function Homepage() {
  const {petite, grande} = useLoaderData<typeof loader>();
  const setBoxes = useSetAtom(boxesAtom);
  const setSelectedBox = useSetAtom(selectedBoxAtom);
  useEffect(() => {
    setBoxes([
      petite as ProductWithPlanFragment,
      grande as ProductWithPlanFragment,
    ]);
    setSelectedBox(petite as ProductWithPlanFragment);
  }, []);
  return <Bundle />;
}
