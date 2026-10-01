(() => {
  // Reload the page with dontCache=<timestamp> in the query string so
  // caches see a URL they haven't stored. Updates an existing dontCache
  // param (matched by exact name) in place rather than adding another. The
  // query is edited as a string, not through URLSearchParams, so other
  // params keep their exact encoding; the URL object carries the hash.
  const key = "dontCache"
  const param = `${key}=${Date.now()}`
  const url = new URL(document.location.href)
  let found = false
  const params = url.search.slice(1).split("&").filter(Boolean).map((p) => {
    if (p.split("=")[0] !== key) return p
    found = true
    return param
  })
  if (!found) params.push(param)
  url.search = params.join("&")
  document.location.href = url.href
})()
