const monetaryFormat = (
  value,
  prefixCurrency = 'R$',
  decimalPlaces = 2
) => {
  const valueFormatted = value
  .toFixed(decimalPlaces)
  .replace('.', ',')


  return `${prefixCurrency} ${valueFormatted}`
}

export { monetaryFormat }