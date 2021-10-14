'use strict'

module.exports = {
  /**
   * Validate if string is a camel case
   * @param  {string} value String to validate
   * @return {boolean}      Boolean result
   */
  isCamelCase (value) {
    return /^[a-z]+(?:[A-Z][a-z]+)*$/g.test(value)
  },

  /**
   * Camelize a string, cutting the string by multiple separators like hyphens, underscores and spaces.
   * @param  {string} value                   String to camelize
   * @param  {object} options                 Camelize options
   * @param  {object} options.preserveNumbers Preserve numbers ? By default numbers will be removed.
   * @return {string}                         Camelized string
   */
  camelize (value, { preserveNumbers = false } = {}) {
    if (typeof value !== 'string') {
      throw new TypeError('The type of `value` argument should a `string`')
    }

    // choose regex based on numbers preserve option
    const regex = preserveNumbers
      ? /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g // will keep numbers
      : /[A-Z]{2,}(?=[A-Z][a-z]*|\b)|[A-Z]?[a-z]*|[A-Z]/g // will remove numbers

    let camelizedValue = ''
    const words = value.match(regex)
    if (words) {
      camelizedValue = words.map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()).join('')
      camelizedValue = camelizedValue.slice(0, 1).toLowerCase() + camelizedValue.slice(1)
    }

    return camelizedValue
  },

  /**
   * Decamelizes a string with/without a custom separator.
   * @param  {string} value             String in camelCase
   * @param  {string} options           Decamelize options
   * @param  {object} options.separator Separator for the new decamelized string. Underscore by default.
   * @return {string}                   Decamelized string
   */
  decamelize (value, { separator = '_' } = {}) {
    if (typeof value !== 'string' || typeof separator !== 'string') {
      throw new TypeError('The type of `value` and `separator` arguments should be a `string`')
    }

    return value
      .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
      .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
      .toLowerCase()
  }
}
