/**
 * Validate if string is a camel case
 * @param  {string} value String to validate
 * @return {boolean}      Boolean result
 */
declare function isCamelCase(value: string): boolean;
/**
 * Camelize a string, cutting the string by multiple separators like hyphens, underscores and spaces.
 * @param  {string} value                   String to camelize
 * @param  {object} options                 Camelize options
 * @param  {object} options.preserveNumbers Preserve numbers ? By default numbers will be removed.
 * @return {string}                         Camelized string
 */
declare function camelize(value: string, { preserveNumbers }?: {
    preserveNumbers?: boolean | undefined;
}): string;
/**
 * Decamelizes a string with/without a custom separator.
 * @param  {string} value             String in camelCase
 * @param  {string} options           Decamelize options
 * @param  {object} options.separator Separator for the new decamelized string. Underscore by default.
 * @return {string}                   Decamelized string
 */
declare function decamelize(value: string, { separator }?: {
    separator?: string | undefined;
}): string;
declare const _default: {
    isCamelCase: typeof isCamelCase;
    camelize: typeof camelize;
    decamelize: typeof decamelize;
};
export default _default;
//# sourceMappingURL=index.d.ts.map