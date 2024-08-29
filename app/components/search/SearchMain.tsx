import React from 'react';
import {SEARCH_ENDPOINT, SearchFormPredictive} from './SearchFormPredictive';
import {SearchResultsPredictive} from './SearchResultsPredictive';
import {Link} from '@remix-run/react';
import {Input} from '../ui/input';
import SearchHeader from './SearchHeader';
import {Button} from '../ui/button';
import {ArrowRight, Search} from 'lucide-react';
import Loading from '../utils/Loading';

export default function SearchMain() {
  return (
    <div className="flex flex-col gap-2">
      <SearchHeader />
      <SearchFormPredictive>
        {({fetchResults, goToSearch, inputRef}) => (
          <div className="flex items-center gap-2">
            <Input
              name="q"
              onChange={fetchResults}
              onFocus={fetchResults}
              placeholder="Search"
              ref={inputRef}
              type="search"
            />
            <Button onClick={goToSearch} variant="actionSandInverse">
              <Search strokeWidth={1} />
            </Button>
          </div>
        )}
      </SearchFormPredictive>

      <SearchResultsPredictive>
        {({items, total, term, state, inputRef, closeSearch}) => {
          const {articles, collections, pages, products, queries} = items;

          if (state === 'loading' && term.current) {
            return (
              <div className="flex items-center justify-center w-full py-4">
                <Loading />
              </div>
            );
          }

          if (!total) {
            return <SearchResultsPredictive.Empty term={term} />;
          }

          return (
            <div className="divide-sand flex flex-col divide-y">
              <SearchResultsPredictive.Queries
                queries={queries}
                inputRef={inputRef}
              />
              <SearchResultsPredictive.Products
                products={products}
                closeSearch={closeSearch}
                term={term}
              />
              <SearchResultsPredictive.Collections
                collections={collections}
                closeSearch={closeSearch}
                term={term}
              />
              <SearchResultsPredictive.Pages
                pages={pages}
                closeSearch={closeSearch}
                term={term}
              />
              <SearchResultsPredictive.Articles
                articles={articles}
                closeSearch={closeSearch}
                term={term}
              />
              {term.current && total ? (
                <Link
                  onClick={closeSearch}
                  to={`${SEARCH_ENDPOINT}?q=${term.current}`}
                  className="w-full"
                >
                  <Button
                    className="text-md flex items-center w-full gap-2"
                    variant="actionSandInverse"
                  >
                    View all results for <q>{term.current}</q>
                    <ArrowRight strokeWidth={1} />
                  </Button>
                </Link>
              ) : null}
            </div>
          );
        }}
      </SearchResultsPredictive>
    </div>
  );
}
