# View without cache bookmarklet

Reloads the current page with a unique `dontCache` query parameter so caches see a URL they haven't stored and the server sends a fresh copy.

## Why

Popular websites use content distribution networks (CDNs) and other caching strategies to reduce the load on their servers during high-traffic periods. While normally that's fine, sometimes you'd like to quickly bypass that cache, for example, when diagnosing a caching issue, or testing a new feature.

## What it does

The bookmarklet sets `dontCache` to the current Unix timestamp in milliseconds and navigates there. Other query parameters and the `#hash` are kept exactly as they were, and clicking again updates the existing `dontCache` value instead of adding another:

| Current URL | Goes to |
| --- | --- |
| `https://example.com/page` | `https://example.com/page?dontCache=1727740800000` |
| `https://example.com/search?q=cats` | `https://example.com/search?q=cats&dontCache=1727740800000` |
| `https://example.com/page?dontCache=1427733996267&a=1` | `https://example.com/page?dontCache=1727740800000&a=1` |
| `https://example.com/page?xdontCache=1` | `https://example.com/page?xdontCache=1&dontCache=1727740800000` |
| `https://example.com/docs#install` | `https://example.com/docs?dontCache=1727740800000#install` |

It only helps with caches keyed on the full URL, which covers most CDNs and proxies. A cache that ignores the query string will still serve the cached page.

## Usage

1. Visit [ben.balter.com/bookmarklets](https://ben.balter.com/bookmarklets/#view-without-cache)
2. Drag the "View without cache" link to your bookmark bar
3. Click the bookmarklet on any page to reload it without the cache

## Developing locally

I'd love your help making the script better. The source lives in `src` and the built files live in `dist`. To build locally:

1. Clone down the repo and `cd` into the directory
2. `npm install`
3. Make your changes
4. `npm test` to type check, lint, build, and run the tests
5. `script/build` to rebuild `dist/bookmark.js` and `index.md`, and commit both

## History

Originally, [a Gist](https://gist.github.com/benbalter/1695742), migrated March 2015.
