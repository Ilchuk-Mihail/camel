'use strict'

const chai = require('chai')
const { expect } = chai

const camel = require('../')

describe('camel lib', function () {
  describe('camel.isCamelCase', function () {
    it('should succeed - all strings are valid', function () {
      [
        'camelCase',
        'camelCaseName',
        'camel',
        'camelABBR'
      ]
        .every(str => expect(camel.isCamelCase(str)).to.equal(true))
    })

    it('should fail - all strings are invalid', function () {
      [
        'foo-bar',
        'foo_bar',
        'foo.bar',
        'FooBar',
        'FOO',
        'foo123',
        'foo bar name',
        '12345',
        'fooBar_',
        '_fooBar',
        ''
      ]
        .every(str => expect(camel.isCamelCase(str)).to.equal(false))
    })
  })
})
