"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const btn = document.querySelector('button');
const numResult = [];
const strResult = [];
function add(a, b) {
    if (typeof (a) === 'number' && typeof (b) === 'number') {
        return a + b;
    }
    else if (typeof (a) === 'string' && typeof (b) === 'string') {
        return a + " " + b;
    }
    return +a + +b;
}
function printResult(obj) {
    console.log(obj.val);
}
btn.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    numResult.push(result);
    strResult.push(stringResult);
    console.log(numResult, strResult);
    printResult({ val: result, timeStamp: new Date() });
});
