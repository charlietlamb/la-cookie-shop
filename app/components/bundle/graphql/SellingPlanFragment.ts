export const SELLING_PLAN_FRAGMENT = `#graphql
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
