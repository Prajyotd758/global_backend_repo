export const KEYCHAIN_PRICE = 99;
export const KEYCHAIN_FREE_AT = 499;
export const FREE_SHIPPING_AT = 999;
export const SHIPPING_FEE = 79;

export function totals(subtotal: number, freeAt: number) {
  const shipping = subtotal === 0 || subtotal >= freeAt ? 0 : SHIPPING_FEE;
  return { subtotal, shipping, total: subtotal + shipping };
}
