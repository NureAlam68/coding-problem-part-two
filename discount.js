// 1- simple discount

// product buy up to 100: 100 taka per product, more than 101-200: 90 taka, more than 200: 70 taka



// function discountedPrice(quantity) {
//     if(quantity <= 100) {
//         const total = quantity * 100;
//         return total;
//     }
//     else if(quantity <= 200) {
//         const total = quantity * 90;
//         return total;
//     }
//     else {
//         const total = quantity * 70;
//         return total;
//     }
// }
// const result = discountedPrice(210);
// console.log('discounted price:', result, 'taka.');





// layered discount 

// first 100 product: 100 taka, 101 to 200 product: 90 taka, above 200: 70 taka




function layeredDiscountedTotal(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if(quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200) {
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}
const result = layeredDiscountedTotal(250);
console.log('Discounted price:', result, 'taka.');