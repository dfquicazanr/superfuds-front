export const formatPrice = (numberPrice: number): string => {
  return new Intl.NumberFormat('de-DE').format(numberPrice)
}