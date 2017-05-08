import { isEmail, isEmpty } from '../validation'

describe('Utilities validation method', () => {
  it('should return "true" with valid email', () => {
    const email = '1234@dotography.com'
    expect(isEmail(email)).toEqual(true);
  })

  it('should return "false" with invalid email', () => {
    const email = '1234'
    expect(isEmail(email)).toEqual(false);
  })
})

describe('function check value is empty', () => {
  it('should "   " to be true', () => {
    expect(isEmpty('   ')).toBe(true)
  })
  it('should undefined to be true', () => {
    expect(isEmpty(undefined)).toBe(true)
  })
  it('should null to be true', () => {
    expect(isEmpty(null)).toBe(true)
  })
  it('should Hello to be false', () => {
    expect(isEmpty('Hello')).toBe(false)
  })
  it('should true to be false', () => {
    expect(isEmpty(true)).toBe(true)
  })
})
