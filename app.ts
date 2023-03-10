const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const btn = document.querySelector('button')!;

const numResult: number[] = [];
const strResult: string[] = [];

type NumOrStr = number | string;
type myObj = {val:number; timeStamp:Date};

interface resObj{
    val:number; 
    timeStamp:Date
}

function add(a: NumOrStr,b: NumOrStr){
    if(typeof(a)==='number' && typeof(b)==='number'){
        return a+b;
    }else if(typeof(a)==='string' && typeof(b)==='string'){
        return a+" "+b;
    }
    return +a + +b;
}

function printResult(obj: resObj){
    console.log(obj.val);
}

btn.addEventListener('click',()=>{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2)
    const stringResult = add(num1,num2);
    numResult.push(result as number);
    strResult.push(stringResult as string);
    console.log(numResult, strResult);
    printResult({val:result as number, timeStamp:new Date()})
});