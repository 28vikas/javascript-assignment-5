// 25	Write a function that checks if a given number is a perfect square.


function checkPerfectSquare(num){
    let newNum = num**(1/2);
    if(Math.round(newNum)**2==num){
        return true;
    }
    return false;
}



console.log(checkPerfectSquare(4));