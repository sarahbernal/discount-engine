//Step 2: Create array of products
let products = [
    {name: "IPhone 16", category: "Phone", price: 800, inventory: 200},
    {name: "Microsoft Surface Pro 8", category: "Laptop", price: 900, inventory: 150},
    {name: "IPad A11", category: "Tablet", price: 400, inventory: 250},
    {name: "Iphone 17", category: "Phone", price: 1000, inventory: 300},
    {name: "Microsoft Surface Pro 11", category: "Laptop", price: 1200, inventory: 180}
];

//Step 3: Write for...of loop based on category and switch statement
for (let product of products) {
    let discount= 0;

    switch (product.category) {
        case "Phone":
            discount =.20;
            break;
        case "Laptop":
            discount =.15;
            break;
        case "Tablet":
            discount =.10;
            break;
        default:
            discount = 0;
    }

    let promoPrice = product.price - (product.price * discount);
    product.promoPrice = promoPrice;
};

console.log(products)

//Step 4: Create variable customerType and write if...else it chain
let customerType = ["Student", "Regular", "Senior"]
let extraDiscount = 0;

if (customerType === "Student") {extraDiscount = 0.05;} 
else if (customerType === "Senior") {extraDiscount = 0.07;}
else {extraDiscount = 0;}

//Step 5: Use for or while loops for 3 customers
let customers = [
    {customerType: "Student", purchases: [0,1]}, 
    {customerType: "Regular", purchases: [0,2]}, 
    {customerType: "Senior", purchases: [0,4]}
]
for (let i = 1; i <= 3; i++) {
    let customer = customers[i]
    let subtotal = 0;

    for (let product of products) {
    subtotal += product.promoPrice;
    product.inventory--;
}

let finalTotal = subtotal * (1 - extraDiscount);
console.log(`Customer ${i}: $${finalTotal.toFixed(2)}`);

};

//Step 6 & 7: Inspecting objects
let product = {name: "IPhone 16", category: "Phone", price: 800, inventory: 200};
for (let key in product) {
 console.log(key + ":" + product[key])};

Object.entries(products[1]).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});


