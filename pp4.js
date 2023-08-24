const combineArray = (arr1, arr2) =>{
    const newArray = [...arr1, ...arr2];
    const max =  Math.max(...newArray);
    return max;
}

const arr1 = [1, 2, 3]
const arr2 =[4, 5, 6];

const result = combineArray(arr1, arr2);
console.log(result);