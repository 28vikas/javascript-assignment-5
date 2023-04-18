// 14	Write a function that finds the maximum number in an array of numbers.


let arr = [1,5,6,7,58,36,25,]

function maxnumbr(arr){
     let max = 0;
     for (let i = 0; i<arr.length; i++){
        if( arr[i]>max){
            max = arr[i];
        }
     }
   return max;
}



console.log(maxnumbr(arr));