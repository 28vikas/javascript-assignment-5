// 4	Write a function that finds the product of all numbers from 1 to a given number.

function multiple(num){
    let sum = 1;
    for(let i = 1; i<=num; i++){
        sum = sum*i
    }
    return sum;
   }
   
   
   console.log(multiple(5));