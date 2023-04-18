//26	Write a function that checks if a given number is a perfect cube.



function checkPerfectSquare(num){
    let newNum = num**(1/3);
    if(Math.round(newNum)**3==num){
        return true;
    }
    return false;
}



console.log(checkPerfectSquare(27));