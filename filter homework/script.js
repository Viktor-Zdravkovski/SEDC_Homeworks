// Create a Constructor function for product. Each product has property: name, category (string),
// hasDiscount (bool) and price. Create an array of 15 products. Now answer the following requirements:

// Find all products with price greater than 20. /
// Get the names of all products of Category Food, that are on discount./
// Get the price of all products that are on discount./
// Find the name and price of all products with name starting with a vowel, that are not on discount.

class Product {
    constructor(name, category, ifDiscount, price) {
        this.name = name
        this.category = category
        this.ifDiscount = ifDiscount
        this.price = price
    }
}


let products = [
    new Product('Phone', 'Electronics', Boolean(false), 52),
    new Product('LED Track', 'Electronics', Boolean(false), 567),
    new Product('Octopus', 'Toys', Boolean(true), 3456),
    new Product('Car', 'Toys', Boolean(true), 17),
    new Product('Watch', 'Accessories', Boolean(false), 13),
    new Product('Cap', 'Accessories', Boolean(false), 15),
    new Product('Tshirt', 'Clothes', Boolean(true), 20),
    new Product('Dress', 'Clothes', Boolean(false), 20),
    new Product('Bike', 'Vehicle', Boolean(false), 6456),
    new Product('Cucumber', 'Food', Boolean(true), 5623),
    new Product('Dragonfruit', 'Food', Boolean(true), 3452),
    new Product('Switch', 'Electronics', Boolean(false), 63),
    new Product('Peach', 'Food', Boolean(true), 12),
    new Product('Gaming-monitor', 'Electronics', Boolean(false), 1200),
    new Product('Graphic-Card', 'Electronics', Boolean(true), 1700)
]

products.filter(product => product.price > 20)
    .map(product => `The Product: ${product.name} has price:  ${product.price} and its over 20`)
    .forEach(product => console.log(product))
/////
console.log("----");
/////
products.filter(product => product.ifDiscount == true && product.category === 'Food')
    .map(product => `The Product: ${product.name} is food's category and has discount`)
    .forEach(product => console.log(product))
/////
console.log("----");
/////

products.filter(product => product.ifDiscount == true)
    .map(product => `The Product: ${product.name} has discount, it's price is: ${product.price}`)
    .forEach(product => console.log(product))
/////
console.log("----");
/////

// ne go reshiv ova sam (stackOverflow, w3schools)
products.filter(product => /^[aeiou]/i.test(product.name) && product.hasDiscount !== true)
    .map(product => `The Product: ${product.name}, starts with a vowel, and is not on discount`)
    .forEach(product => console.log(product));

