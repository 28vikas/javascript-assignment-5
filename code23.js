// 23	Write a function that checks if a given number is a power of three.




function poweroftwo(num){
    if (num <=0 ){
        return false;
        
    } for( i = num; i>1; i = i/3){
        if(i%3!== 0){
            return false;
        }
    }
    return true;
}



console.log(poweroftwo(27));
