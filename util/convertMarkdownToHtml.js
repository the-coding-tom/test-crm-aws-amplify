export const convertMarkdownToHtml = text => {
  const showdown = require('showdown')
  const converter = new showdown.Converter()

  return converter.makeHtml(text)
}
