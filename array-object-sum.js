// 1 product sum array - object

const products = [
    {name: 'Shampoo', price: 200, color: 'black'},
    {name: 'Shirt', price: 500, color: 'black'},
    {name: 'Pant', price: 1000, color: 'black'},
    {name: 'Face-wash', price: 600, color: 'black'},
]
function getShoppingTotal(products) {
    let total = 0;
    for(const product of products) {
        total = total + product.price;
    }
    return total;
}
let result = getShoppingTotal(products);
console.log('Total shopping cost:', result, 'taka.');