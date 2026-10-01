---
---

# View Without Cache Bookmarklet

Drag this link to your bookmark bar to save the bookmarklet:

<a href='javascript:(()=%3E{let o=%22dontCache%22,t=o+%22=%22+Date.now();var e=new URL(document.location.href);let a=!1;var l=e.search.slice(1).split(%22%26%22).filter(Boolean).map(e=%3Ee.split(%22=%22)[0]!==o?e:(a=!0,t));a||l.push(t),e.search=l.join(%22%26%22),document.location.href=e.href})();'>View without cache</a>

See [github.com/benbalter/view-without-cache-bookmarklet](https://github.com/benbalter/view-without-cache-bookmarklet) for more information.
