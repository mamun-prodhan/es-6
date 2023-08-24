const numbers = [1, 6, 8, 4];
for(num of numbers){
    // console.log(num);
}

const nobab = 'siraj ud doulla';
for(char of nobab){
    // console.log(char);
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
// for(const keys in glass){
//     const value = glass[keys];
//     console.log(keys, value);
// }

const keys = Object.keys(glass);
for(key of keys){
    const value = glass[key];
    console.log(key ,value);
}