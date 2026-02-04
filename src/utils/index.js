export const formatAmount = (value) => {
  if (Number.isInteger(value)) {
    return value
  }
  return value.toFixed(1)
}