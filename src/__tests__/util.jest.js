import { monetaryFormat } from '../util';

describe('monetary format test', () => {

  test('Should format with default parameters', () => {
    const valueToFormat = 10

    const valueFormatted = monetaryFormat(valueToFormat)

    expect(valueFormatted)
      .toBe('R$ 10,00')
  })

  test('Should format value with decimal case correctly', () => {
    const valueToFormat = 10.37

    const valueFormatted = monetaryFormat(valueToFormat)

    expect(valueFormatted)
      .toBe('R$ 10,37')
  })

  test('Should format with custom prefix currency', () => {
    const valueToFormat = 20
    const currencyPrefix = 'US$'

    const valueFormatted = monetaryFormat(valueToFormat, currencyPrefix)

    expect(valueFormatted)
      .toBe('US$ 20,00')
  })

  test('Should Format with custom prefix currency and custom decimal places', () => {
    const valueToFormat = 1000
    const currencyPrefix = '¥'
    const decimalPlaces = 0

    debugger

    const valueFormatted = monetaryFormat(valueToFormat, currencyPrefix, decimalPlaces)

    debugger

    expect(valueFormatted)
      .toBe('¥ 1000')
  })
})
