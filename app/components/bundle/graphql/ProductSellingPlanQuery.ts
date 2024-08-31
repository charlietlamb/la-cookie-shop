export const PRODUCT_SELLING_PLAN_QUERY = `#graphql
query ProductPlan(
  $country: CountryCode
  $handle: String!
  $language: LanguageCode
  $selectedOptions: [SelectedOptionInput!]!
) @inContext(country: $country, language: $language) {
  product(handle: $handle) {
    ...ProductWithPlan
  }
}
  
fragment ProductWithPlan on Product {
  id
  title
  vendor
  handle
  descriptionHtml
  description
  
  seo {
    description
    title
  }
  sellingPlanGroups(first:10) {
		nodes {
			...SellingPlanGroup
		}
	}
  selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
    ...ProductVariant
  }
  variants(first: 1) {
    nodes {
      ...ProductVariant
    }
  }
}

fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
	

fragment SellingPlanGroup on SellingPlanGroup {
  name
  options {
    name
    values
  }
  sellingPlans(first:10) {
    nodes {
      ...SellingPlan
    }
  }
}
  

  
fragment SellingPlanMoney on MoneyV2 {
  amount
  currencyCode
}

fragment SellingPlan on SellingPlan {
  id
  options {
    name
    value
  }
  priceAdjustments {
    adjustmentValue {
      ... on SellingPlanFixedAmountPriceAdjustment {
        __typename
        adjustmentAmount {
          ... on MoneyV2 {
            ...SellingPlanMoney
          }
        }
      }
      ... on SellingPlanFixedPriceAdjustment {
        __typename
        price {
          ... on MoneyV2 {
            ...SellingPlanMoney
          }
        }
      }
      ... on SellingPlanPercentagePriceAdjustment {
        __typename
        adjustmentPercentage
      }
    }
    orderCount
  }
  recurringDeliveries
  checkoutCharge {
    type
    value {
      ... on MoneyV2 {
        ...SellingPlanMoney
      }
      ... on SellingPlanCheckoutChargePercentageValue {
        percentage
      }
    }
  }
}
` as const;
