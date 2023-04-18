// 16	Write a function that calculates the average of an array of numbers.


let arr = [2,5,1,8,3,4,5];

function average(arr){
    let count = 0;
    sum = 0;

    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i]
        count++;
    }
    return sum/count;
}


console.log(average(arr));

