// 13	Write a function that sorts an array of numbers in descending order.

let arr =[1,2,53,6,9,8];

function sortAscendingoder(arr){

    for (let i = 0; i<arr.length; i++){
        for(let j= i+1; j<arr.length; j++ ){
            if(arr[i]<arr[j]){
             let temp = arr[i];
             arr[i] = arr[j];
             arr[j]=temp;
            }
        }
    }
    return arr;
}

console.log(sortAscendingoder(arr));