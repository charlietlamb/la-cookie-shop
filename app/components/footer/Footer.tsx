import {Suspense} from 'react';
import {Await, NavLink} from '@remix-run/react';
import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';
import Logo from '../brand/Logo';
import Socials from '../brand/Socials';
import FooterBrand from './FooterBrand';

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export function Footer() {
  return (
    <footer className="bg-sand grid grid-cols-3 py-8 text-white">
      <FooterBrand />
    </footer>
  );
}
