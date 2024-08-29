import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, type MetaFunction} from '@remix-run/react';
import Bundle from '~/components/bundle/Bundle';
import {COLLECTION_QUERY} from '~/graphql/index/CollectionQuery';
import {boxesAtom, selectedBoxAtom} from '~/store/bundle';
import {useSetAtom} from 'jotai';
import {useEffect} from 'react';

export const meta: MetaFunction = () => {
  return [{title: 'La Cookie Shop'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;

  const {collection: boxes} = await storefront.query(COLLECTION_QUERY, {
    variables: {
      id: 'gid://shopify/Collection/279067820101',
    },
  });
  return defer({boxes});
}

export default function Homepage() {
  const {boxes} = useLoaderData<typeof loader>();

  const setBoxes = useSetAtom(boxesAtom);
  const setSelectedBox = useSetAtom(selectedBoxAtom);
  useEffect(() => {
    console.log(boxes);
    setBoxes([
      boxes.products.nodes[0].variants.nodes[0],
      boxes.products.nodes[1].variants.nodes[0],
    ]);
    setSelectedBox(boxes.products.nodes[0].variants.nodes[0]);
  }, []);
  return <Bundle />;
}
