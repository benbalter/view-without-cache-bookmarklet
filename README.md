# View without cache bookmarklet

Appends the current unix timestamp as a query var to your browser's current page in order to break most caches

[![Build Status](https://travis-ci.org/benbalter/view-without-cache-bookmarklet.svg?branch=master)](https://travis-ci.org/benbalter/view-without-cache-bookmarklet)

## Why

Popular websites use content distribution networks (CDNs) and other caching strategies to reduce the load on their servers during high-traffic periods. While normally that's fine, sometimes you'd like to quickly bypass that cache, for example, when diagnosing a caching issue, or testing a new feature.

## How

This script works as a bookmarklet, quickly appending the current unix timestamp (an always unique string of numbers) to your browser's current URL, causing the web server to see a URL it's never seen before, and presumably bypassing the cache to serve up a fresh page.

## So this is like a hacking tool or something?

No. This is used for testing caching problems. Besides, it'd be pretty hard to do much damage with a single browser. For example, if you were at `https://github.com/benbalter/view-without-cache-bookmarklet` and clicked the bookmarklet, you'd be silently redirected to `https://github.com/benbalter/view-without-cache-bookmarklet?dontCache=1427733996267`,

## Isn't this overkill?

You could just as easily manually add `?asdf` to a URL (followed by `?asdf1`, `?asdf2`, etc.) but you'll quickly start reusing URLs defeating the purpose, or will run into edge cases where the URL already has query vars. The script takes those edge cases into account, and automatically updates its own query var (and preserves other query vars) so you don't have to.

## Usage

1. Create a new bookmark
2. Copy the code from [`dist/bookmarklet.js`](dist/bookmark.js) into the URL field, preceding the code with the word `javascript:` e.g., `javascript:function(){...`
3. Click bookmarklet on a page to reload the page sans cache

## Developing locally

I'd love your help making the script better. The source lives in `src` and the built files live in `dist`. To build locally:

1. Clone down the repo and `cd` into the directory
2. `npm install`
3. Make your changes
4. `grunt build`

## History

Originally, [a Gist](https://gist.github.com/benbalter/1695742), migrated March 2015.
