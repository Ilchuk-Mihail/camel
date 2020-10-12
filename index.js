'use strict'

const camelCaseRegex = new RegExp('^[a-z][A-Za-z]*$')

module.exports = {
  /**
   * Validate if string is a camel case
   * @param  {string} str String to validate
   * @return {boolean}    Boolean result
   */
  isCamelCase (str) {
    return camelCaseRegex.test(str)
  }
}
