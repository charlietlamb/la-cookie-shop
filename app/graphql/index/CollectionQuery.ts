import {
  PRODUCT_FRAGMENT,
  PRODUCT_VARIANTS_FRAGMENT,
} from '~/routes/products.$handle';

export const COLLECTION_QUERY = `#graphql
  ${PRODUCT_FRAGMENT}
  query CollectionQuery($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      products(first: 4, reverse: true) {
        nodes {
          ...ProductFragment
        }
      }
    }
  }
` as const;
