// 1. product quantity 1: sum array - object




// const products = [
//     {name: 'Shampoo', price: 200, color: 'black'},
//     {name: 'Shirt', price: 500, color: 'black'},
//     {name: 'Pant', price: 1000, color: 'black'},
//     {name: 'Face-wash', price: 600, color: 'black'},
// ]
// function getShoppingTotal(products) {
//     let total = 0;
//     for(const product of products) {
//         total = total + product.price;
//     }
//     return total;
// }
// let result = getShoppingTotal(products);
// console.log('Total shopping cost:', result, 'taka.');





// more product quantity: sum array - object



const products = [
    {name: 'Shampoo', price: 200, color: 'black', quantity: 1},
    {name: 'Shirt', price: 500, color: 'black', quantity: 2},
    {name: 'Pant', price: 1000, color: 'black', quantity: 1},
    {name: 'Face-wash', price: 600, color: 'black', quantity: 3},
]
function getShoppingTotal(products) {
    let total = 0;
    for(const product of products) {
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}
let result = getShoppingTotal(products);
console.log('Total shopping cost:', result, 'taka.');
