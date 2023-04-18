// 15	Write a function that finds the minimum number in an array of numbers.




let arr = [1,5,6,7,58,-36,25,]

function minnumbr(arr){
     let min = Infinity;
     for (let i = 0; i<arr.length; i++){
        if( arr[i]<min){
            min= arr[i];
        }
     }
   return min;
}



console.log(minnumbr(arr));