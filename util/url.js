export const getQueryParams = url => {
  const urlParam = require('url')

  const parsedUrl = urlParam.parse(url)

  return parsedUrl.search
}
