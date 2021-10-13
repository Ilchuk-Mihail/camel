'use strict'

module.exports = {
  /**
   * Validate if string is a camel case
   * @param  {string} value String to validate
   * @return {boolean}      Boolean result
   */
  isCamelCase (value) {
    // prev version ^[a-z][A-Za-z]*$
    return /^[a-z]+(?:[A-Z][a-z]+)*$/g.test(value)
  },

  /**
   * Camelize a string, cutting the string by multiple separators like hyphens, underscores and spaces.
   * @param  {string} value String to camelize
   * @return {string}       Camelized string
   */
  camelize (value) {
    if (typeof value !== 'string') {
      throw new TypeError('The type of `value` argument should a `string`')
    }

    // return value.replace(/^([A-Z])|[\s-_/.]+(\w)/g, function (match, p1, p2) {
    //   if (p2) {
    //     return p2.toUpperCase()
    //   }
    //   return p1.toLowerCase()
    // })

    // regex with numbers - /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    const text = value
      .match(/[A-Z]{2,}(?=[A-Z][a-z]*|\b)|[A-Z]?[a-z]*|[A-Z]/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('')
    console.log(text)
    return text.slice(0, 1).toLowerCase() + text.slice(1)
  },

  /**
   * Decamelizes a string with/without a custom separator.
   * @param  {string} value     String in camelCase
   * @param  {string} separator Separator for the new decamelized string. Underscore by default.
   * @return {string}           Decamelized string
   */
  decamelize (value, separator = '_') {
    if (typeof value !== 'string' || typeof separator !== 'string') {
      throw new TypeError('The type of `value` and `separator` arguments should be a `string`')
    }

    return value
      .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
      .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
      .toLowerCase()
  }
}
