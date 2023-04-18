// 22	Write a function that checks if a given number is a power of two.


function poweroftwo(num){
    if (num <=0 ){
        return false;
        
    } for( let i = num; i>1; i = i/2){
        if(i%2!== 0){
            return false;
        }
    }
    return true;
}



console.log(poweroftwo(3));




















