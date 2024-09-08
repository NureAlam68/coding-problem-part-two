// number validation 

// function multiply(n1, n2) {
//     if(typeof n1 !== 'number' || typeof n2 !== 'number') {
//         return 'please provide a number';
//     }
//     const mult = n1 * n2;
//     return mult;
// }
// let result = multiply(9, 'two');
// console.log(result);




// string validation


// function fullName(first, second) {
//     if(typeof first !== 'string') {
//         return 'First name should be a string.';
//     }
//     else if(typeof second !== 'string') {
//         return 'Second name should be a string.'
//     }
//     const full = first + ' ' + second;
//     return full;
// }
// const result = fullName('Nure', 'Alam');
// console.log(result);




// object validation


function getPrice(product) {
    if(typeof product !== 'object') {
        return 'Please provide an object';
    }
    const price = product.price;
    return price;
}
const result = getPrice({name: 'shirt', price: 500,});
console.log(result);
