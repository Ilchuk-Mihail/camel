"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate if string is a camel case
 * @param  {string} value String to validate
 * @return {boolean}      Boolean result
 */
function isCamelCase(value) {
    return /^[a-z]+(?:[A-Z][a-z]+)*$/g.test(value);
}
/**
 * Camelize a string, cutting the string by multiple separators like hyphens, underscores and spaces.
 * @param  {string} value                   String to camelize
 * @param  {object} options                 Camelize options
 * @param  {object} options.preserveNumbers Preserve numbers ? By default numbers will be removed.
 * @return {string}                         Camelized string
 */
function camelize(value, { preserveNumbers = false } = {}) {
    // choose regex based on numbers preserve option
    const regex = preserveNumbers
        ? /[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g // will keep numbers
        : /[A-Z]{2,}(?=[A-Z][a-z]*|\b)|[A-Z]?[a-z]*|[A-Z]/g; // will remove numbers
    let camelizedValue = '';
    const words = value.match(regex);
    if (words) {
        camelizedValue = words.map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()).join('');
        camelizedValue = camelizedValue.slice(0, 1).toLowerCase() + camelizedValue.slice(1);
    }
    return camelizedValue;
}
/**
 * Decamelizes a string with/without a custom separator.
 * @param  {string} value             String in camelCase
 * @param  {string} options           Decamelize options
 * @param  {object} options.separator Separator for the new decamelized string. Underscore by default.
 * @return {string}                   Decamelized string
 */
function decamelize(value, { separator = '_' } = {}) {
    return value
        .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
        .toLowerCase();
}
exports.default = {
    isCamelCase,
    camelize,
    decamelize
};
//# sourceMappingURL=index.js.map