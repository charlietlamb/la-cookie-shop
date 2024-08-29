import {PRODUCT_VARIANTS_FRAGMENT} from '~/routes/products.$handle';

export const COLLECTION_QUERY = `#graphql
  ${PRODUCT_VARIANTS_FRAGMENT}
  query CollectionQuery($id: ID!) {
    collection(id: $id) {
      id
      title
      handle
      products(first: 4, reverse: true) {
        nodes {
          ...ProductVariants
        }
      }
    }
  }
` as const;
