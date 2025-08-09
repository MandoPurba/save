/**
 * Format number ke bentuk mata uang.
 * Default: Rupiah (IDR) dengan locale Indonesia.
 */
export const formatCurrency = (
  value: number,
  currency: string = "IDR",
  locale: string = "id-ID",
  minimumFractionDigits: number = 0
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits
  }).format(value)
}

/**
 * Format nilai dengan tanda plus/minus di depan.
 */
export const formatCurrencyWithSign = (
  value: number,
  currency: string = "IDR",
  locale: string = "id-ID"
): string => {
  const sign = value > 0 ? "+" : value < 0 ? "-" : ""
  return `${sign}${formatCurrency(Math.abs(value), currency, locale)}`
}

/**
 * Format persentase (otomatis tambahkan tanda + atau -)
 */
export const formatPercentage = (value: number, fractionDigits = 1): string => {
  const sign = value > 0 ? "+" : value < 0 ? "-" : ""
  return `${sign}${Math.abs(value).toFixed(fractionDigits)}%`
}
