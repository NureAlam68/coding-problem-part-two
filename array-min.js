//  array thake min number 


const prices = [12000, 23000, 18000, 10000, 30000];

function getMin(numbers) {
    let min = prices[0];
    for(let number of numbers) {
        if(number < min) {
            min = number;
        }
    }
    return min;
}
let result = getMin(prices);
console.log('Cheapest mobile price is:', result, 'taka.');