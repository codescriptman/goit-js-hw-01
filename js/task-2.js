function getShippingMessage(country, price, deliveryFee) {
  return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
console.log(getShippingMessage("Canada", 200, 30)); // "Shipping to Canada will cost 230 credits"
console.log(getShippingMessage("Japan", 150, 40)); // "Shipping to Japan will cost 190 credits"
