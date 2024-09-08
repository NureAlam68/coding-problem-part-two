// max number between two number and ultimate max number with 4 number


function getMax(num1, num2) {
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max1 = getMax(12, 33);
console.log('max1:', max1);
const max2 = getMax(44,5);
console.log('max2:', max2);

const ultimateMax = getMax(max1, max2);
console.log('ultimateMax:', ultimateMax);