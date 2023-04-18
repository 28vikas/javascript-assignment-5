// 35	Write a function that finds the median of an array of numbers.

let arr = [5,35,5,8,6,9]

function median(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i]= arr[j]
                arr[j]= temp;
            }
        }
    }
    if(arr.length%2 ==0){
        let x = (arr.length/2)-1;
        let y = (arr.length/2);
        let median = (arr[x]+arr[y])/2;
        return median;
    }
    else{
        let median = arr[((arr.length+1)/2)-1];
        return median;
    }

}

console.log(median(arr));