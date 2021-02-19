export const convertMarkdownToHtml = text => {
  var showdown = require('showdown')
  var converter = new showdown.Converter()
  const eventDescription = text.replace(/([ ]*\n)/g, `<br/>\n`)
  const finalDescription = eventDescription.replace(
    /(<br\/>\n<br\/>\n<br\/>)/g,
    `<br/><br/>`
  )
  return converter.makeHtml(finalDescription)
}
