// 17	Write a function that checks if an array of numbers is sorted in ascending order.

let arr = [1,3,4,6,7,9]

function checkArrInascending(arr){

    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                return false;
            }
        }
    }
   return true;
}


console.log(checkArrInascending(arr));
