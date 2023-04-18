// 3	Write a function that finds the sum of all numbers from 1 to a given number.



function sumNum(num){
 let sum = 0;
 for(let i = 1; i<=num; i++){
     sum += i
 }
 return sum;
}


console.log(sumNum(10));