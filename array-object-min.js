const phones = [
    {name: 'Samsung', price: 20000, color: 'black'},
    {name: 'Iphone', price: 120000, color: 'black'},
    {name: 'Walton', price: 10000, color: 'black'},
]
function getCheapestPhone(phones) {
    let min = phones[0];
    for(let phone of phones) {
        if(phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}
let result = getCheapestPhone(phones);
console.log('The cheapest phone is:', result);
