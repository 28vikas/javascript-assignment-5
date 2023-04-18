// 24	Write a function that checks if a given number is a power of 10.



function poweroftwo(num){
    if (num <=0 ){
        return false;
        
    } for( i = num; i>1; i = i/10){
        if(i%10!== 0){
            return false;
        }
    }
    return true;
}



console.log(poweroftwo(27));