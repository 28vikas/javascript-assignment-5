// 21	Write a function that finds the factorial of a given number using recursion.


function factorialByRecursion(num){
    if(num===0){
        return 1;
    }else{
        return num*factorialByRecursion(num-1)
    }

}



console.log(factorialByRecursion(5));