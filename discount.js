// 1- simple discount

// product buy up to 100: 100 taka per product, more than 101-200: 90 taka, more than 200: 70 taka



function discountedPrice(quantity) {
    if(quantity <= 100) {
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200) {
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}
const result = discountedPrice(210);
console.log(result);