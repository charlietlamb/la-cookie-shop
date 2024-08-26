export const COOKIES_QUERY = `#graphql
  fragment Cookies on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query Cookies ($country: CountryCode, $language: LanguageCode, $collectionId: ID!)
    @inContext(country: $country, language: $language) {
    collection(id: $collectionId) {
      products(first: 4, sortKey: BEST_SELLING, reverse: true) {
        nodes {
          ...Cookies
        }
      }
    }
  }
` as const;
