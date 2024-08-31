import {SELLING_PLAN_FRAGMENT} from './SellingPlanFragment';

export const SELLING_PLAN_GROUP_FRAGMENT = `#graphql
  ${SELLING_PLAN_FRAGMENT}
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
` as const;
