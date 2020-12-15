let urls = [];
let payload = [];

function get(url) {
  const urlIsInCache = urls.filter((item) => item === url);
    
  if (!urlIsInCache || !urlIsInCache.length) {
    return undefined;
  }

  return payload[urlIsInCache[0]];
}

function set(url, data) {
  urls.push(url);
  payload[url] = data;
}

module.exports = {
  get,
  set
}