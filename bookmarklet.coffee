key = "dontCache"
param = "#{key}=#{(new Date).getTime()}"
query = document.location.search.substr(1)

# no query vars
return document.location.search = param if query.length == 0

# our query string is not in the string, just append
return document.location.search += "&#{param}" if query.indexOf(key) == -1

# map to find and replace
query = query.split("&").map (arg) =>
  return arg if arg.split("=")[0] != key
  param

document.location.search = query.join "&"