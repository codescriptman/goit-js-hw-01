function getShippingMessage(country, price, deliveryFee) {
  return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}
// • country — перший параметр, рядок, що містить країну доставки
// • price — другий параметр, число, що містить загальну вартість товару
// • deliveryFee — третій параметр, число, що містить вартість доставки товару
console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));
