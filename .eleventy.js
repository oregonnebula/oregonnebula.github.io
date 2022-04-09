require('dotenv').config()
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer')

module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode('documentToHtmlString', documentToHtmlString)
}
