// Task -2:


// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names) {
    let smallName =names[0];
    for(const name of names) {
        if(name.length < smallName.length) {
            smallName = name;
        }
    }
    return smallName;
}
const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let result = smallestName(names);
console.log('Smallest name is:', result);
