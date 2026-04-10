import { describe, it, expect } from 'vitest'
import { formatNumber, capitalize, truncateText, isValidEmail } from './helpers'

describe('Helper Functions', () => {
  describe('formatNumber', () => {
    it('should format numbers with comma separators', () => {
      expect(formatNumber(1000)).toBe('1,000')
      expect(formatNumber(1234567)).toBe('1,234,567')
      expect(formatNumber(0)).toBe('0')
    })

    it('should handle small numbers without commas', () => {
      expect(formatNumber(123)).toBe('123')
      expect(formatNumber(99)).toBe('99')
    })

    it('should handle negative numbers', () => {
      expect(formatNumber(-1000)).toBe('-1,000')
      expect(formatNumber(-1234567)).toBe('-1,234,567')
    })
  })

  describe('capitalize', () => {
    it('should capitalize the first letter', () => {
      expect(capitalize('hello')).toBe('Hello')
      expect(capitalize('world')).toBe('World')
    })

    it('should lowercase the rest of the string', () => {
      expect(capitalize('hELLO')).toBe('Hello')
      expect(capitalize('WORLD')).toBe('World')
    })

    it('should handle empty strings', () => {
      expect(capitalize('')).toBe('')
    })

    it('should handle single character strings', () => {
      expect(capitalize('a')).toBe('A')
      expect(capitalize('Z')).toBe('Z')
    })
  })

  describe('truncateText', () => {
    it('should truncate text longer than maxLength', () => {
      expect(truncateText('Hello World', 5)).toBe('Hello...')
      expect(truncateText('This is a long text', 10)).toBe('This is a...')
    })

    it('should return original text if shorter than maxLength', () => {
      expect(truncateText('Hello', 10)).toBe('Hello')
      expect(truncateText('Short', 20)).toBe('Short')
    })

    it('should handle empty strings', () => {
      expect(truncateText('', 5)).toBe('')
    })

    it('should handle exact length matches', () => {
      expect(truncateText('Hello', 5)).toBe('Hello')
    })
  })

  describe('isValidEmail', () => {
    it('should return true for valid emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true)
      expect(isValidEmail('user+tag@example.org')).toBe(true)
    })

    it('should return false for invalid emails', () => {
      expect(isValidEmail('invalid-email')).toBe(false)
      expect(isValidEmail('@domain.com')).toBe(false)
      expect(isValidEmail('user@')).toBe(false)
      expect(isValidEmail('user@domain')).toBe(false)
    })

    it('should return false for empty strings', () => {
      expect(isValidEmail('')).toBe(false)
    })
  })
})