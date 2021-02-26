// Add your functions here
function map(sourceArray, func) {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(func(sourceArray[i]))
    }
    return newArray;
}

function reduce(sourceArray, func, startingValue) {
    let total = (!!startingValue) ? startingValue : sourceArray[0];
    let i = (!!startingValue) ? 0 : 1;

    for (i; i < sourceArray.length; i++) {
        total = func(sourceArray[i], total)
    }
    return total;
}