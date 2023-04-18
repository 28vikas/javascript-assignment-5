// 1	Write a function that checks if a given number is a multiple of both 3 and 5.



function multiple(num){
    if(num%3 == 0 || num%5 == 0){
        return "the number is multiple of 3 and 5"

    }else{
        return "the number is not multiple of 3 and 5"
        
    }
}


console.log(multiple(25));