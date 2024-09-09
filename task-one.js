// Task -1:


// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];



function lowestNumber(numbers) {
    let low = numbers[0];
    for(let number of numbers) {
        if(number < low) {
            low = number;
        }
    }
    return low;
}
let numbers =  [167, 190, 120, 165, 137];
let result = lowestNumber(numbers);
console.log('Lowest number in the array is:', result);
