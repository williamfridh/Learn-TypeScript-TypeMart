"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
/**
 * Set types and data.
 */
const productName = "hoodie";
let shipping;
let taxPercent;
let taxTotal;
let total;
const shippingAddress = "Vretalundsvägen 13 New York";
/**
 * Get product & calculate price, tax, and shipping.
 */
const product = products_1.default.filter(product => {
    return product.name === productName;
})[0];
shipping = product.price >= 25 ? 0 : 5;
taxPercent = shippingAddress.match("New York") ? 0.1 : 0.05;
taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
/**
 * Print results to console.
 */
product.preOrder && console.log("This product is on pre order.");
shipping || console.log("Free shipping!");
console.log(productName);
console.log(shippingAddress);
console.log(product.price);
console.log(taxTotal);
console.log(shipping);
console.log(total);
