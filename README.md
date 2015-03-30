# View without cache bookmarklet

Appends the current unix timestamp as a query var to your browser's current page in order to break most caches

[![Build Status](https://travis-ci.org/benbalter/view-without-cache-bookmarklet.svg?branch=master)](https://travis-ci.org/benbalter/view-without-cache-bookmarklet)

## Why

Popular websites use content distribution networks (CDNs) and other caching strategies to reduce the load on their servers during high-traffic periods. While normally that's fine, sometimes you'd like to quickly bypass that cache, for example, when diagnosing a caching issue, or testing a new feature.

## How

This script works as a bookmarklet, quickly appending the current unix timestamp (an always unique string of numbers) to your browser's current URL, causing the web server to see a URL it's never seen before, and presumably bypassing the cache to serve up a fresh page.

## So this is like a hacking tool or something?

No. This is used for testing caching problems. Besides, it'd be pretty hard to do much damage with a single browser.

## Usage

1. Create a new bookmark
2. Copy the code from [`dist/bookmarklet.js`](dist/bookmark.js) into the URL field
3. Click bookmarklet on a page to reload the page sans cache

## History

Originally, [a Gist](https://gist.github.com/benbalter/1695742), migrated March 2015.
