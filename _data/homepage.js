const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

module.exports = async () => {
  return client.getEntry('6ZFQYhusb6mHbrhB0H4Q76')
    .then(response => response.fields)
    .catch(console.error)
}
