// 19	Write a function that finds the sum of all numbers in an array of numbers.

let arr = [2,5,1,8,3,4,5];

function average(arr){
    
    sum = 0;

    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i]
      
    }
    return sum;
}


console.log(average(arr));
