export const getPrice = (price: number): string => {
  const priceTofix = price.toString();
  const lenPrice = priceTofix.length;
  const priceFixed =
    '$' +
    priceTofix.substring(0, lenPrice - 2) +
    '.' +
    priceTofix.substring(lenPrice - 2);

  return priceFixed;
};
