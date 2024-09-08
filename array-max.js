// array to max number




let height = [90, 65, 86, 78, 64, 74, 80];

function getMax(numbers) {
    let max = height[0];    // height array er 1st index max dore nilam.
    for(let num of numbers) {
        if(num > max) {
            max = num;
        }
    }
    return max;
}
let max = getMax(height);
console.log('Max height is:', max, 'cm.');