// 2	Write a function that checks if a given number is prime.

// function prime(num){


//     if(num < 2){
//         return "not a prime number"
//     }
//     for(let i = 2; i<num; i++){
//         if(num%i == 0){
//             return "prime number"
//         }
//     }
   

// }
// console.log(prime(10));0; 



function primeNum(num){
    let factor = 0;
    for(let i = 1; i<=num; i++){
        if(num%i==0){
            factor++;
        }

    }if(factor==2){
        return "it is prime number"
    }
    return "not a prime number"
}

console.log(primeNum(13))


