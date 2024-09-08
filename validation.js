// number validation 

function multiply(n1, n2) {
    if(typeof n1 !== 'number' || typeof n2 !== 'number') {
        return 'please provide a number';
    }
    const mult = n1 * n2;
    return mult;
}
let result = multiply(9, 'two');
console.log(result);
