import {CartApiQueryFragment} from 'storefrontapi.generated';
import {Sheet, SheetContent, SheetTrigger} from '../ui/sheet';
import {Search} from 'lucide-react';
import {cartAtom} from '~/store/open';
import {useAtom} from 'jotai';
import {SearchResultsPredictive} from './SearchResultsPredictive';
import {Link} from '@remix-run/react';
import {SEARCH_ENDPOINT, SearchFormPredictive} from './SearchFormPredictive';

export default function SearchSheet() {
  const [isOpen, setIsOpen] = useAtom(cartAtom);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Search />
      </SheetTrigger>
      <SheetContent>
        <div className="predictive-search">
          <br />
          <SearchFormPredictive>
            {({fetchResults, goToSearch, inputRef}) => (
              <>
                <input
                  name="q"
                  onChange={fetchResults}
                  onFocus={fetchResults}
                  placeholder="Search"
                  ref={inputRef}
                  type="search"
                />
                &nbsp;
                <button onClick={goToSearch}>Search</button>
              </>
            )}
          </SearchFormPredictive>

          <SearchResultsPredictive>
            {({items, total, term, state, inputRef, closeSearch}) => {
              const {articles, collections, pages, products, queries} = items;

              if (state === 'loading' && term.current) {
                return <div>Loading...</div>;
              }

              if (!total) {
                return <SearchResultsPredictive.Empty term={term} />;
              }

              return (
                <>
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
                    >
                      <p>
                        View all results for <q>{term.current}</q>
                        &nbsp; →
                      </p>
                    </Link>
                  ) : null}
                </>
              );
            }}
          </SearchResultsPredictive>
        </div>
      </SheetContent>
    </Sheet>
  );
}
