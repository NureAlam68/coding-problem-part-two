// Task-3:


// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk

// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.



function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    let laptopPrice = 35000;
    let tabletPrice = 15000;
    let mobilePrice = 20000;

    let totalLaptopPrice = laptopPrice * laptopQuantity;
    let totalTabletPrice = tabletPrice * tabletQuantity;
    let totalMobilePrice = mobilePrice * mobileQuantity;
    let totalBudgetRequired = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
    return totalBudgetRequired;
}
let result = calculateElectronicsBudget(2, 2, 1,);
console.log(' The total budget required to buy electronics:', result, 'taka.');
