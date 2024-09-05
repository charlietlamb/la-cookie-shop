import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {type MetaFunction} from '@remix-run/react';
import OurCookies from '~/components/index/ourCookies/OurCookies';

export const meta: MetaFunction = () => {
  return [{title: 'La Cookie Shop'}];
};

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte

  // Await the critical data required to render initial state of the page

  return defer({});
}

export default function Homepage() {
  return <OurCookies />;
}
