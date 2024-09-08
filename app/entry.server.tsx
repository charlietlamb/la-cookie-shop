import type {EntryContext, AppLoadContext} from '@shopify/remix-oxygen';
import {RemixServer} from '@remix-run/react';
import isbot from 'isbot';
import {renderToReadableStream} from 'react-dom/server';
import {createContentSecurityPolicy} from '@shopify/hydrogen';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  context: AppLoadContext,
) {
  const {nonce, header, NonceProvider} = createContentSecurityPolicy({
    shop: {
      checkoutDomain: context.env.PUBLIC_CHECKOUT_DOMAIN,
      storeDomain: context.env.PUBLIC_STORE_DOMAIN,
    },
    defaultSrc: [
      'https://rsms.me',
      'https://cdn.shopify.com',
      'https://shop.app',
      'https://fonts.googleapis.com',
      'https://image.mux.com',
      'https://inferred.litix.io',
      'https://stream.mux.com',
    ],
    styleSrc: ['https://rsms.me', 'https://fonts.googleapis.com'],
    fontSrc: ['https://fonts.gstatic.com', 'self'],
    mediaSrc: [
      'blob:',
      'self',
      'https://image.mux.com',
      'https://inferred.litix.io',
      'https://stream.mux.com',
      'https://stream.mux.com',
    ],
    scriptSrc: [
      'https://www.gstatic.com',
      "'self'",
      "'unsafe-inline'",
      "'unsafe-eval'",
      'http://localhost:*',
      'https://cdn.shopify.com',
      'https://shop.app',
      'https://inferred.litix.io',
      'https://stream.mux.com',
    ],
    connectSrc: ['*', 'https://inferred.litix.io'],
  });

  const body = await renderToReadableStream(
    <NonceProvider>
      <RemixServer context={remixContext} url={request.url} />
    </NonceProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        // eslint-disable-next-line no-console
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Content-Security-Policy', header);

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
