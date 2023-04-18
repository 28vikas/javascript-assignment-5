// 7	Write a function that finds the factorial of a given number.



function factorial(num){

    if(num < 0){
        
        return "please eneter valid number"

    } else if(num === 0){
       return 1;
    }
    else{
        let sum = 1;
        for(let i = num; i >=1; i--){
            sum =  sum *i;
        }
        return sum;
    }
}


console.log(factorial(5));