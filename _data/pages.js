const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

module.exports = async () => {
  return client.getEntries({ content_type: 'page' })
    .then(response => {
      return response.items.map(page => page.fields)
    })
    .catch(console.error)
}
