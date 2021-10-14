import chai from 'chai'
import camel from './index'

const { expect } = chai

describe('camel lib', function () {
  describe('isCamelCase', function () {
    it('should succeed - all strings are valid', function () {
      [
        'f',
        'fooBar',
        'fooBarName',
        'foo'
      ].every(str => expect(camel.isCamelCase(str)).to.equal(true))
    })

    it('should fail - all strings are invalid', function () {
      [
        'foo-bar',
        'foo_bar',
        'foo.bar',
        'FooBar',
        'FOO',
        'fooF',
        '1foo',
        'foo123',
        'foo bar name',
        '12345',
        'fooBar_',
        '_fooBar',
        ''
      ].every(str => expect(camel.isCamelCase(str)).to.equal(false))
    })
  })

  describe('camelize', function () {
    it('should camelize all strings', function () {
      expect(camel.camelize('')).to.equal('')
      expect(camel.camelize(' ')).to.equal('')
      expect(camel.camelize('_')).to.equal('')
      expect(camel.camelize('foo')).to.equal('foo')
      expect(camel.camelize('fooBAR')).to.equal('fooBar')
      expect(camel.camelize('fooBar')).to.equal('fooBar')
      expect(camel.camelize('foo.bar')).to.equal('fooBar')
      expect(camel.camelize('foo...bar')).to.equal('fooBar')
      expect(camel.camelize('foo_bar_name')).to.equal('fooBarName')
      expect(camel.camelize('foo bar baz')).to.equal('fooBarBaz')
      expect(camel.camelize('foo-bar-baz')).to.equal('fooBarBaz')
      expect(camel.camelize('fooBar-baz')).to.equal('fooBarBaz')
      expect(camel.camelize('foo-bar_baz and foo_bar-baz')).to.equal('fooBarBazAndFooBarBaz')
      expect(camel.camelize('123')).to.equal('')
      expect(camel.camelize('foo1_bar2')).to.equal('fooBar')
      expect(camel.camelize('foo1')).to.equal('foo')
      expect(camel.camelize('1Foo')).to.equal('foo')
      expect(camel.camelize('A')).to.equal('a')
      expect(camel.camelize('FooBar')).to.equal('fooBar')
      expect(camel.camelize('Foo ABBR')).to.equal('fooAbbr')
      expect(camel.camelize('foo Bar$')).to.equal('fooBar')
      expect(camel.camelize('foo-Bar#')).to.equal('fooBar')
    })

    it('should camelize and keep numbers if preserveNumbers option set', function () {
      expect(camel.camelize('123', { preserveNumbers: true })).to.equal('123')
      expect(camel.camelize('foo1_bar2', { preserveNumbers: true })).to.equal('foo1Bar2')
      expect(camel.camelize('foo1', { preserveNumbers: true })).to.equal('foo1')
      expect(camel.camelize('1Foo', { preserveNumbers: true })).to.equal('1Foo')
    })
  })

  describe('decamelize', function () {
    it('should decamelize all strings', function () {
      expect(camel.decamelize('')).to.equal('')
      expect(camel.decamelize(' ')).to.equal(' ')
      expect(camel.decamelize('_')).to.equal('_')
      expect(camel.decamelize('foo')).to.equal('foo')
      expect(camel.decamelize('fooBar')).to.equal('foo_bar')
      expect(camel.decamelize('fooBar', { separator: '.' })).to.equal('foo.bar')
      expect(camel.decamelize('fooBar', { separator: '...' })).to.equal('foo...bar')
      expect(camel.decamelize('fooBarName')).to.equal('foo_bar_name')
      expect(camel.decamelize('fooBarBaz', { separator: ' ' })).to.equal('foo bar baz')
      expect(camel.decamelize('fooBarBaz', { separator: '' })).to.equal('foobarbaz')
      expect(camel.decamelize('fooBarBaz', { separator: '-' })).to.equal('foo-bar-baz')
      expect(camel.decamelize('FOO BAR BAZ')).to.equal('foo bar baz')
      expect(camel.decamelize('fooBarBazAndFooBarBaz')).to.equal('foo_bar_baz_and_foo_bar_baz')
      expect(camel.decamelize('foo-bar-baz')).to.equal('foo-bar-baz')
      expect(camel.decamelize('123')).to.equal('123')
      expect(camel.decamelize('foo1Bar2')).to.equal('foo1_bar2')
      expect(camel.decamelize('foo1')).to.equal('foo1')
      expect(camel.decamelize('1Foo')).to.equal('1_foo')
      expect(camel.decamelize('A')).to.equal('a')
      expect(camel.decamelize('FooBar')).to.equal('foo_bar')
      expect(camel.decamelize('fooBar$')).to.equal('foo_bar$')
      expect(camel.decamelize('fooABBR')).to.equal('foo_abbr')
      expect(camel.decamelize('ABBRFoo')).to.equal('abbr_foo')
      expect(camel.decamelize('fooBARBaz')).to.equal('foo_bar_baz')
    })
  })
})
