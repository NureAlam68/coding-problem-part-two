// max number between three number


function maxOfThree(num1, num2, num3) {
    if(num1 > num2 && num1 > num2) {
        return num1;
    }
    else if(num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
let max = maxOfThree(200, 400, 66);
console.log('max of three:', max);